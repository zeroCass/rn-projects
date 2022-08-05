import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import TextoCentral from './components/TextoCentral'
import TelaA from './view/TelaA'
import TelaB from './view/TelaB'
import TelaC from './view/TelaC'


export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    )
    
}