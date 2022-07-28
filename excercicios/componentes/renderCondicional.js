import React from 'react'
import {Text} from 'react-native'
import If from './IF'

export default (props) => (
    <>
        <If test={props.elem === 'True'}>
            <Text> Passou no teste e renderizou !</Text>
        </If>
    </>
)