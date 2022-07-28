import React from 'react'
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native'


const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        borderColor: "#888",
        textAlign: "center",
        borderWidth: 1
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    },
    buttonOperation: { 
        backgroundColor: "#fa8231",
        color: "#fff"
    },
    buttonDel: {
        fontSize: 30
    }


})

export default props => {
    const buttonStyles = [styles.button]
    if (props.double) buttonStyles.push(styles.buttonDouble)
    if (props.triple) buttonStyles.push(styles.buttonTriple)
    if (props.operation) buttonStyles.push(styles.buttonOperation)
    if (props.del) buttonStyles.push(styles.buttonDel)


    return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={buttonStyles}>{props.label}</Text>
    </TouchableHighlight>
    )
}