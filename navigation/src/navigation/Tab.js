import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../view/TelaA'
import TelaB from '../view/TelaB'
import TelaC from '../view/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()


export default props => {
    return (
        <Tab.Navigator initialRouteName='TelaA' 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                
              if (route.name === 'TelaA') {
                iconName = focused
                  ? 'reorder-four'
                  : 'reorder-four-outline';
              } 
              if (route.name === 'TelaB') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } 
              if (route.name === 'TelaC') {
                iconName = focused ? 'add-circle' : 'add-circle-outline'
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: true,
          })}
        >
            <Tab.Screen name='TelaA' component={TelaA} options={{ title: 'Menu' }} />
            <Tab.Screen name='TelaB' component={TelaB} options={{ title: 'Info' }}/>
            <Tab.Screen name='TelaC' component={TelaC} options={{ title: 'Config' }}/>
        </Tab.Navigator>
    )
}