import React, {useState} from 'react'
import {Text, Button, StyleSheet, View} from 'react-native'

import Estilo from './Estilo'


export default ({inicio = 0}) => {
    const [numero, setNumero] = useState(inicio)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text style={Estilo.textG}> Contador</Text>
            <View style={style.Display}>
                <Text style={[style.DisplayText, Estilo.textG]}> {numero} </Text>
            </View>
            <View style={style.Botao}>  
                <Button title='+' onPress={inc}/>
                <Button title='-' onPress={dec}/>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Botao: {
        flexDirection: "row"
    },
    Display: {
        backgroundColor: "#000",
        padding: 20,
        width: 300,
        alignItems: "center"
    },
    DisplayText: {
        color: "#FFF"
    }
})
    