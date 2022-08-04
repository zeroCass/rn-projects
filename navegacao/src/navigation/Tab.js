import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../view/TelaA'
import TelaB from '../view/TelaB'
import TelaC from '../view/TelaC'

const Tab = createBottomTabNavigator()


export default props => {
    return (
        <Tab.Navigator initialRouteName='TelaA' screenOptions={{ 
            headerShown: false, 
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: { fontSize: 30 }
        }}>
            <Tab.Screen name='TelaA' component={TelaA} />
            <Tab.Screen name='TelaB' component={TelaB} />
            <Tab.Screen name='TelaC' component={TelaC} />
        </Tab.Navigator>
    )
}