import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen name='Auth' component={Auth}/>
            <Stack.Screen name='Home' component={TaskList}/>
        </Stack.Navigator>
    )
}