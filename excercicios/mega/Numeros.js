import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Estilo from '../componentes/Estilo'

export default props => (
    <View style={style.Container}>
        <Text style={[Estilo.textG, style.Num]}>{props.numero}</Text>
    </View>
)

const style = StyleSheet.create({
    Container: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: "#000",
        alignItems: "center",
        padding: 10,
        margin: 5
    },
    Num: {
        color: "#FFF"
    }

})