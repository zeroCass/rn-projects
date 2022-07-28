import React from 'react'
import {Text, FlatList} from 'react-native'

export default (props) => {
    console.warn(props.children)
    return (
        <>
            <Text>Nome do pai: {props.nome}</Text>
            {props.children}
            {/* <FlatList
                data={props.children}
                renderItem={( {item} ) => {
                    return <Text>Filho: {item.nome}</Text>
                }}
            /> */}
        </>
    )
    
}