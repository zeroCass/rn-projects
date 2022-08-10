import React, { useState } from 'react'
import { 
    ImageBackground, 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Platform,
    TouchableOpacity,
    Alert, 
} from 'react-native'

import loginImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput' // esse aproach nao funcionou
import Icon from 'react-native-vector-icons/FontAwesome'
import { server, showError, showSucess } from '../common'
import axios from 'axios'

export default (/*{ navigation }*/) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [stageNew, setStageNew] = useState(false)

    const signinOrSignup = () => {
        if (stageNew) signup()
        else signin()
    }

    const signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name,
                email,
                password,
                confirmPass,
            })
            showSucess('Usuario cadastrado!')
            setStageNew(false)
            setEmail('')
            setName('')
            setPassword('')
            setConfirmPass('')
        }
        catch(e) {
            showError(e)
        }
        
    }

    const signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email,
                password,
            })
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            // navigation.navigate('Home')
        }
        catch(e) {
            showError(e)
        }
    }

    const validations = []
    validations.push(email && email.includes('@'))
    // validations.push(password && password.length > 3)
    if (stageNew) {
        validations.push(name && name.trim().length > 3)
        validations.push(password === confirmPass)
    }
    const validForm = validations.reduce((acumulate, current) => acumulate && current)

    return (
        <ImageBackground source={loginImage} style={styles.background}>
            <Text style={styles.title}>Tasks</Text>
            <View style={styles.formContainer}>
                <Text style={styles.subtitle}>{stageNew ? 'Crie sua conta' : 'Informe seus dados'}</Text>
                {stageNew && 
                <View style={styles.container}>
                    <Icon name='user' size={20} style={styles.icon}/>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={name => setName(name)}
                        placeholder={'Nome'}
                    />
                </View>             
                }
                <View style={styles.container}>
                    <Icon name='at' size={20}  style={styles.icon}/>
                    <TextInput 
                        style={styles.input}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        placeholder={'E-mail'}
                    />
                </View>
                <View style={styles.container}>
                    <Icon name='lock' size={20}  style={styles.icon}/>
                    <TextInput  
                        style={styles.input}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        placeholder={'Senha'}
                        secureTextEntry={true}
                    />
                </View>
                {stageNew && 
                    <View style={styles.container}>
                        <Icon name='asterisk' size={20}  style={styles.icon}/>
                        <TextInput 
                            secureTextEntry={true} 
                            style={styles.input}
                            value={confirmPass}
                            onChangeText={confirmPass => setConfirmPass(confirmPass)}
                            placeholder={'Confirme a senha'}
                        />
                    </View>
                    
                }
                <TouchableOpacity onPress={signinOrSignup} disabled={!validForm}>
                    <View style={[styles.button, !validForm ? {backgroundColor: '#AAA'} : {}]}>
                        <Text style={styles.buttonText}>{stageNew ? 'Registrar' : 'Entrar'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={{ padding: 10 }}
                onPress={() => {
                    setStageNew(!stageNew)
                    setEmail('')
                    setName('')
                    setPassword('')
                    setConfirmPass('')
                }}
            >
                <Text style={styles.buttonText}>{ stageNew ? 'Já possui conta?' : 'Ainda não possui conta?' }</Text>
            </TouchableOpacity>
        </ImageBackground>   
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%',
    },
    input: {
        backgroundColor: '#EEE',
        width: '75%',
        marginLeft: 15,
    },
    button: {
        backgroundColor: '#080',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: '#FFF',   
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    container: {
        marginTop: 10,
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
    },
    icon: {
        color: '#333',
        marginLeft: 20,
        marginTop: 7,
    },
})