import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default (props) => {
    console.log(props.route.params) 
    return (
        <TextoCentral bgColor='#9932cd'>
            Tela C - {}
        </TextoCentral>
    )
}