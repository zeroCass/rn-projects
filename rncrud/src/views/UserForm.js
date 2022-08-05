import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput 
                style={styles.input} 
                value={user.name}
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Input the name...'    
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input} 
                value={user.email}
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Input the email...'    
            />
            <Text>AvatarURL</Text>
            <TextInput
                style={styles.input}  
                value={user.avatarUrl}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='Input the avatarUrl...'    
            />
            <Button
                title='Salvar'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
    }
})