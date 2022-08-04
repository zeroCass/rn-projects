import React from 'react'
import {  } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../view/TelaA'
import TelaB from '../view/TelaB'
import TelaC from '../view/TelaC'
import StepStack from '../components/StepStack'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='TelaA' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TelaA' options={{ title: 'Informações Iniciais' }}>
                {props => (
                    <StepStack {...props} avancar='TelaB'>
                        <TelaA/>
                    </StepStack>
                )}
            </Stack.Screen>
            <Stack.Screen name='TelaB' >
                {props => {
                    return (
                        <StepStack {...props} avancar = 'TelaC' voltar='TelaA'>
                            <TelaB/>
                        </StepStack>
                    )
                }}
            </Stack.Screen>
            <Stack.Screen name='TelaC'>
                {props => (
                    <StepStack {...props} avancar='TelaC' voltar='TelaB' data='Hello World'>
                        <TelaC {...props} />
                    </StepStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
