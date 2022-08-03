import React from 'react'
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
} from 'react-native'


const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: (Dimensions.get('window').width / 5),
        width: (Dimensions.get('window').width / 5),
        borderRadius: (Dimensions.get('window').width / 5) / 2.2,
        padding: 15,
        backgroundColor: "#616161",
        // borderColor: "rgba(0,0,0,0.8)",
        textAlign: "center",
        // borderWidth: 0,
        marginTop: 10,
        transform: [{scaleX: 1.1}],
        color: '#fff'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 5) * 2,
        borderRadius: ((Dimensions.get('window').width / 5) * 2) / 2.2,
        marginLeft: 10,
        backgroundColor: '#9E9E9E',
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 5) * 3,
        borderRadius: ((Dimensions.get('window').width / 5) * 3) / 2.2,
    },
    buttonOperation: { 
        backgroundColor: "#fa8231",
        color: "#fff"
    },
    buttonDel: {
        fontSize: 20,
        paddingTop: 25
    }


})

export default props => {
    const buttonStyles = [styles.button]
    if (props.double) buttonStyles.push(styles.buttonDouble)
    if (props.triple) buttonStyles.push(styles.buttonTriple)
    if (props.operation) buttonStyles.push(styles.buttonOperation)
    if (props.del) buttonStyles.push(styles.buttonDel)
    if (props.otherstyle) buttonStyles.push(props.otherstyle)


    return (
    <TouchableHighlight onPress={() => props.onClick(props.label)} underlayColor={'transparent'}>
        <Text style={buttonStyles}>{props.label}</Text>
    </TouchableHighlight>
    )
}