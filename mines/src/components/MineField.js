// converte o array de objetos recebido em props.board 
// em um array de objetos jsx (cada linha eh uma View e cada obj se torna um Field)

import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} 
            onOpen={() => props.onOpenField(r, c)} 
            onSelect={() => props.onSelectField(r, c)} />
        })
        return <View key={r} style={{ flexDirection: 'row' }} >{columns}</View>
    })
    
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})