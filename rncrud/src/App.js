import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from '@rneui/base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <UserProvider>
                <Stack.Navigator 
                    initialRouteName='UserList'
                    screenOptions={screenOptions}>
                    <Stack.Screen 
                        name='UserList' 
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: () => (
                                    <Button 
                                        type='clear'
                                        icon={<Icon name='add' size={25} color='white'/>}
                                        onPress={() => navigation.navigate('UserForm')}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen 
                        name='UserForm' 
                        component={UserForm}
                        options={{ title: 'Formulário de Usuários' }}
                    />
                </Stack.Navigator>
            </UserProvider>
        </NavigationContainer>
    )  
}

const screenOptions =  {
    headerStyle: { backgroundColor: 'orange' },
    headerTitleStyle: { fontWeigth: 'bold' },
    headerTintColor: 'white',

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})