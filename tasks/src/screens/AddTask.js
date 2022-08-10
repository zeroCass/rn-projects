import React, { useState } from 'react'
import { 
    Modal, 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    StyleSheet,
    TouchableOpacity,
    TextInput, 
    Platform,
} from 'react-native'
import commonStyles from '../commonStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'


export default props => {
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)

    const getDateTimePicker = () => {
        let datePicker = 
            <DateTimePicker
                value={date}
                onChange={(event, newDate) => {
                    setShowDatePicker(false)
                    if (event.type === 'dismissed') {
                        setDate(date)
                        return
                    }
                    setDate(newDate)
                }}
                mode='date'
            />
            const dateString = dayjs(date).locale(ptbr).format('ddd, D [de] MMMM')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>
                    {showDatePicker === true ? datePicker : null}
                </View>
            )
        }

        return datePicker
    }


    const save = () => {
        if (props.onSave) {
            const newTask = {
                id: Math.random(),
                desc: desc,
                estimateAt: date,
                doneAt: null,
            }
            props.onSave(newTask)
            setDate(new Date())
            setShowDatePicker(false)
            setDesc('')
            props.onCancel()
        }
        
    }


    return (
        <Modal 
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onCancel}
            animationType={'slide'}>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput 
                    placeholder='Informe a descrição' 
                    style={styles.input} 
                    value={desc}
                    onChangeText={text => setDesc(text)}
                />
                {getDateTimePicker()}
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#FFF',
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 14,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',   
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15,
    },
})