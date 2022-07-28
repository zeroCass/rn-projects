import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default () => (
    <View style={style.FlexV1}>
        <Quadrado/>
        <Quadrado cor='#F00'/>
        <Quadrado cor='#0F0'/>
        <Quadrado cor='#00F'/>
    </View>
)

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: "#000",
        flexGrow: 1,
        width: "100%",
        justifyContent: "center", //altera o mainAxis
        alignItems: "center", //altera o secondAxis
        flexDirection: "row" //altera o qual sera o mainAxis
    }
})