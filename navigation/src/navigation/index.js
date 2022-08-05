import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import Drawer from './Drawer'
import Tab from './Tab'
// import Stack from './Stack'



export default () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Drawer /> */}
                <Tab />
                {/* <Stack /> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}