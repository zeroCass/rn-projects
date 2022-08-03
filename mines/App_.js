import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableHighlight 
            onLongPress={() => console.warn('Holded')}
            style={{
                width: 50, height: 50, 
                backgroundColor: '#CCC', 
                justifyContent: 'center',
                alignItems: 'center'
                }} >
                <Text>Botao</Text>
            </TouchableHighlight>
        </View>
        
    )
}



