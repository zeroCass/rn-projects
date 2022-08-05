import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TelaA from '../view/TelaA'
import TelaB from '../view/TelaB'
import TelaC from '../view/TelaC'

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator initialRouteName='TelaA' screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='TelaA' component={TelaA} />
            <Drawer.Screen name='TelaB' component={TelaB} />
            <Drawer.Screen name='TelaC' component={TelaC} />
        </Drawer.Navigator>
    )
}