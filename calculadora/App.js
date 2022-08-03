import React from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native'

import Button from './src/componentes/Button'
import Display from './src/componentes/Display'


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    button:{
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "rgba(0,0,0,0.8)",
        padding: 10,
        justifyContent: "space-between",
    }
})


export default class App extends React.Component {
    iniState = {
        displayResult: '',   // shows the pre calculate process
        displayValue: '0',   // shows full operations
        currentOperand: '',  // the current digit the was press or the will be pressed
        previousOperand: '', // the first digit the was pressed or the last calculation
        fontModify: false,
        operation: null,    // the last operation set (not awals be the current)
    }

    state = {...this.iniState}
    
    clearDisplay = () => {
        this.setState({ ...this.iniState })
    }

    addDigit = (digit) => {
        if (digit === '.' && this.state.currentOperand.includes('.')) return
        if (this.state.displayValue === '0') this.state.displayValue = ''

        const currentOperand = this.state.currentOperand + digit
        const displayValue = this.state.displayValue + digit
        // update the state and pre calculates
        this.setState({ currentOperand, displayValue }, () => this.calculateShowCase())
    } 

    removeDigit = () => {
        let displayValue = this.state.displayValue.slice(0, -1)
        const lastOperation = parseFloat(this.state.displayValue.slice(-1).trim())
        let operation = this.state.operation
        let currentOperand = this.state.currentOperand
        isNaN(lastOperation) ? operation = null : currentOperand = ''
        displayValue === '' ? displayValue = '0' : displayValue
        this.setState({ displayValue, currentOperand, operation, displayResult: '' })
    }

    convertOperation (displayValue) {
        //swtich the operations to the ritgh one
        
        if (displayValue.includes('x')) displayValue = displayValue.replace('x', '*')
        if (displayValue.includes('÷')) displayValue = displayValue.replace('÷', '/')
   
        return displayValue
    }


    setOperation = (operation) => {
        // if there is no number, it is impossible to do operations
        if (this.state.displayValue === '0')return

        // check if the last input was a operator, if so, return
        const lastInput = parseFloat(this.state.displayValue.slice(-1).trim())
        if (isNaN(lastInput)) return

        // concate the display valye with operation
        let displayValue = this.state.displayValue
        operation === '=' ? displayValue : displayValue += `${operation}`
        this.setState({ displayValue })        

        if (operation === '=') {
            this.finalCalculate()
            return
        }

        // se existe 2 operandos (valor inserido), calcula ele
        if (this.state.previousOperand !== '') {
            // updates the display and only after process the calculate
            // this.setState({ displayValue }, () => this.calculate(operation))
            this.calculate(operation)
            return
        }
        
        // change the operand, allowing the user to insert the next operand
        // update the operation and set in the queue
        const currentOperand = ''
        const previousOperand = this.state.currentOperand
        this.setState({ currentOperand, previousOperand, operation })

    }

    //calcute and just show in the display, dont compute anything
    calculateShowCase = () => {
        if ((this.state.currentOperand === '' || this.state.previousOperand === '') || this.state.operation === null) return
        // let previousOperand = this.state.previousOperand
        let result = this.convertOperation(this.state.displayValue)
        // result = eval(`${this.state.previousOperand} ${this.state.operation} ${this.state.currentOperand}`)
        // console.log(this.state.displayValue)
        result = eval(result)
        this.setState({ displayResult: result})
    }

    // calculte the operation in queue, updating the result display and set the result to previousNumber, allowing the user to continue 
    // the calculation process 
    calculate = (operation) => {
        let result = this.convertOperation(this.state.displayValue)
        // result = eval(`${this.state.previousOperand} ${this.state.operation} ${this.state.currentOperand}`)
        // console.log(this.state.displayValue)
        result = eval(result)
        const previousOperand = result //update the value allowing to continue the calculation, although dont change the display value
        const currentOperand = ''
        // updates the operation to the last entered
        this.setState({ previousOperand, currentOperand, operation: operation })
    }


    // do the calculation and shows the result
    finalCalculate = () => {
        if (this.state.currentOperand === '' || this.state.previousOperand === '' || this.state.operation === null) return

        let result = this.convertOperation(this.state.displayValue)
        // result = eval(`${this.state.previousOperand} ${this.state.operation} ${this.state.currentOperand}`)
        //console.log(this.state.displayValue)
        result = eval(result)
        const previousOperand = ''
        const currentOperand = result // shows the result and lets the user to add new values or do others operations
        this.setState({ previousOperand, currentOperand, operation: null, displayResult: '', displayValue: result})
            
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Display value={this.state.displayValue} result={this.state.displayResult} font={this.state.fontModify}/>
                <View style={styles.button}>
                    <Button label='AC' double onClick={this.clearDisplay}/>
                    {/* <Button label='()'/> */}
                    <Button label='%' operation otherstyle={{backgroundColor: '#9E9E9E'}}/>
                    <Button label='÷' operation onClick={this.setOperation}/>
                    <Button label='7' onClick={this.addDigit}/>
                    <Button label='8' onClick={this.addDigit}/>
                    <Button label='9' onClick={this.addDigit}/>
                    <Button label='x' operation onClick={this.setOperation}/>
                    <Button label='4' onClick={this.addDigit}/>
                    <Button label='5' onClick={this.addDigit}/>
                    <Button label='6' onClick={this.addDigit}/>
                    <Button label='-' operation onClick={this.setOperation}/>
                    <Button label='1' onClick={this.addDigit}/>
                    <Button label='2' onClick={this.addDigit}/>
                    <Button label='3' onClick={this.addDigit}/>
                    <Button label='+' operation onClick={this.setOperation}/>
                    <Button label='0' onClick={this.addDigit}/>
                    <Button label='.' onClick={this.addDigit}/>
                    <Button label='DEL' del onClick={this.removeDigit}/>
                    <Button label='=' operation onClick={this.setOperation}/>
                    
                </View>
            </SafeAreaView>
        )
    }
    
}

