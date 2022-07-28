import React from 'react'
import {
    Text, 
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: "flex-end"
    },
    displayValue: {
        fontSize: 60,
        color: "#fff",
    },
    displayResult: {
        fontSize: 40,
        color: "#fff"
    },
    displayFont: {
        fontSize: 40
    }

})

export default props => {
    const displayValueStyles = [styles.displayValue]
    if (props.font === true) displayValueStyles.push(styles.displayFont)

    return (
        <View style={styles.display}>
            <Text numberOfLines={1} style={displayValueStyles}>{props.value}</Text>
            <Text numberOfLines={1} style={styles.displayResult}>{props.result}</Text>
        </View>
    )
}