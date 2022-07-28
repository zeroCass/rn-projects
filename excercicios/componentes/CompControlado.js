import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'

export default () => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text> Seu nome é: {nome}</Text>
            <TextInput 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )

}
