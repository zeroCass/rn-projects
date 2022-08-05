import React from 'react'
import { Text, View } from 'react-native' 

export default props => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.bgColor || '#000'
    }}>
        <Text style={{ 
            fontSize: 50, 
            color: props.txtColor || '#fff', 
            }}>{props.children}</Text>
    </View>
)