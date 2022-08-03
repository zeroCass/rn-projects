import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native' 
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'



export default (props) => {
    const { mined, opened, nearMines, exploded, flagged } = props 
    
    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (opened && exploded) styleField.push(styles.exploded)
    if (!opened) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? 
                <Text style={[styles.label, {color: color}]}>{nearMines}</Text> : false}
                {mined && opened ? <Mine/> : false}
                {flagged && !opened ? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
        
    )

}


const styles = StyleSheet.create({
    field: {
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        borderTopColor: '#CCC',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: params.fontSize,
        fontWeight: 'bold',
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    

})