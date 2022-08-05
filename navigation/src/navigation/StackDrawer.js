import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../view/TelaA'
import TelaB from '../view/TelaB'
import TelaC from '../view/TelaC'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='TelaB' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TelaB' component={TelaB} />
        </Stack.Navigator>
    )
}