import React from 'react'
import {Text, TextInput, Button, View, StyleSheet} from 'react-native'
import Estilo from '../componentes/Estilo'
import Numeros from './Numeros'
import CondicaoView from './CondicaoView'



export default class Mega extends React.Component {
  
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    setNumero = (num) => {
        this.setState({qtdNumeros: +num})
    }

    gerarNumeroAleatorio = (array) => {
        const numero = parseInt((Math.random() * 60 - 1) + 1)
        return array.includes(numero) ? this.gerarNumeroAleatorio(array) : numero
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroAleatorio(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros: numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        if (nums.length < 0) return
        return nums.map(num => {
            return <Numeros key={num} numero={num}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.textG}>Gerador da Mega-Sena</Text>
                <Text>{this.state.qtdNumeros} Numeros</Text>
                <TextInput
                    placeholder='Digite a quantidade de numeros'
                    value={this.state.qtdNumeros}
                    onChangeText={num => this.setNumero(num)}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <CondicaoView test={this.state.numeros.length > 1}>
                    <View style={style.ContainerNumber}>
                    {this.exibirNumeros()}
                    </View>
                </CondicaoView>
            </>
        )
    }

}



const style = StyleSheet.create({
    ContainerNumber: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        padding: 5,
        backgroundColor: "#6E6E6E",
        justifyContent: "center"
    }
})