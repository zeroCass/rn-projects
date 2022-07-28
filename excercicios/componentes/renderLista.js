import React from 'react'
import { FlatList, Text } from 'react-native'
import Estilo from './Estilo'

const array = [{id:1, elem:'Elemento 1'}, {id:2, elem:'Elemento 2'}, {id:3, elem:'Elemento 3'}]

export default () => (
    <>
        <Text style={Estilo.textG}>Lista usando FlatList</Text>
        <FlatList 
            data={array}
            keyExtractor={elem => `${elem.id}`}
            renderItem={({item}) => {
                return <Text> {item.id} - {item.elem} </Text>
            }}
        />
         
    </>
)