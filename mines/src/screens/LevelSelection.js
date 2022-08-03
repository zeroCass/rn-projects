import React from 'react'
import {
    Modal,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
         animationType='slide'
         visible={props.isVisible}
         transparent={true}
         onDismiss={props.onCancel} >
            <TouchableOpacity style={styles.frame} onPressOut={props.onCancel}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select Difficult</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} 
                    onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgMedium]}
                    onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Hard</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}


const styles = StyleSheet.create({
    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
        width: 100,
        borderRadius: 70,
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgMedium: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})