import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    console.log(props)
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon}/>
            <TextInput {...props} style={styles.input} onChangeText={() => props.onChangeText(props.value)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
    },
    icon: {
        color: '#333',
        marginLeft: 20,
    },
    input: {
        width: '70%',
        marginLeft: 20,
    },
})