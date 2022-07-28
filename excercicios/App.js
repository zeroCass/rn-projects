import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'


// import Contador from './componentes/Contador'
// import Array from './componentes/RenderArray'
// import Lista from './componentes/renderLista'
// import Condicional from './componentes/renderCondicional'
// import CompControlado from './componentes/CompControlado'
// import Pai from './componentes/Pai'
// import Filho from './componentes/Filho'
// import FlexBox from './layout/FlexBox'
import Mega from './mega/Megasena'

export default () => (
    <View style={style.App}>
        <Mega qtdNumeros={10}/>
        {/* 
        <FlexBox/>
        <Pai nome='Valdomiro'>
            <Filho nome='Kleber'/>
            <Filho nome='Cleiton'/>
        </Pai>
        <CompControlado/>
        <Condicional elem='True'/>
        <Lista/>
        <Array/>
        <Contador inicio={0}/> 
        */}
    </View>
)




const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})