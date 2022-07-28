// O JSX consegue rendereziar elementos ateh quando 
// estao presentes dentro de um Array. Isso possibilita
// renderizar uma lista dinâmica

import React from 'react'
import {Text} from 'react-native'
import Estilo from './Estilo'

const array = ['Elemento 1', 'Elemento 2', 'Elemento 3']

export default () => (
    <>
        <Text style={Estilo.textG}>Lista usando map</Text>
        {array.map((item, index) => {
            return <Text key={index}>{index} - {item}</Text>
        })}
    </>
)