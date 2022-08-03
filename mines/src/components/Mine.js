import React from 'react'
import { View, StyleSheet } from 'react-native'

export default () => (
    <View style={styles.container}>
        <View style={styles.coreMine}>
            <View style={styles.line}></View>
            <View style={[styles.line, { transform: [ {rotate: '45deg'} ] } ]}></View>
            <View style={[styles.line, { transform: [ {rotate: '90deg'} ] } ]}></View>
            <View style={[styles.line, { transform: [ {rotate: '135deg'} ] } ]}></View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    coreMine: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    },
})