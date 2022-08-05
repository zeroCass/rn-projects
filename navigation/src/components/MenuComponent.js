import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


export default (props) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
        }}>
            <Button 
                onPress={() => props.navigation.openDrawer()}
                title='Menu'/>
        </View>
    )
}