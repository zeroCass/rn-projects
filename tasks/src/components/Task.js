import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable'


export default props => {

    // retorna um compenete view em formato de circulo
    const getCheckView = () => {
        if (props.doneAt !== null) {
            return (
                <View style={styles.done}>
                    <Icon name='check' size={20} color={'#FFF'} />
                </View>
            )
        }
 
        return <View style={styles.pending}></View>
        
    }

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right} onPress={() => props.onDelete(props.id)}>
                <Icon name='trash' size={30} color={'#FFF'}/>
            </TouchableOpacity>
        )
    }
    
    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Text style={styles.excludeText}>Excluir</Text>
                <Icon name='trash' size={30} color={'#FFF'} style={styles.excludeIcon}/>
            </View>
        )
    }  

    const doneOrNotStyle = props.doneAt !== null ? { textDecorationLine: 'line-through' } : {}
    const date = props.doneAt !== null ? props.doneAt : props.estimateAt
    const formattedDate = dayjs(date).locale(ptbr).format('ddd, D [de] MMMM')

    return (
        <Swipeable 
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete(props.id)}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView()}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF',
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    pending: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderColor: '#555',
        borderWidth: 1,
    },  
    done: { 
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 12,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
    right: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    left: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        margin: 10,
        fontSize: 20,
    },
    excludeIcon: {
        marginLeft: 10,
    },
     
})