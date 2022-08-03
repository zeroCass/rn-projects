import React from 'react'
import {
  StyleSheet,
  View,
  Alert
} from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import { 
    createMineBoard,
    cloneBoard,
    hadExplosion,
    openField,
    showMines,
    wonGame,
    invertFlag,
    flaggUsed
} from './src/functions'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

class App extends React.Component  {

    constructor(props) {
        super(props)
        this.state = this.createState()

    }

    createState = () => {
        const rows = params.getRowsAmount()
        const columns = params.getColumnsAmount()
        return {
            board: createMineBoard(rows, columns, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: true,
        }
    }


    minesAmount = () => {
        const rows = params.getRowsAmount()
        const columns = params.getColumnsAmount()
        return Math.ceil(rows * columns * params.difficultLevel)
    }


    onLevelSelected = level => {
        params.difficultLevel = level
        this.setState(this.createState())
    }


    onOpenField = (row, column) => {
        if (this.state.lost) return

        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            Alert.alert('You loose!')
        }

        if (won) {
            Alert.alert('You win!')
        }
        
        this.setState({ board, lost, won })
    }


    onSelectField = (row, column) => {
        if (this.state.lost) return

        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)

        if (won) Alert.alert('You won!')
        this.setState({ board, won })
    }


    render() {
      return (
        <View style={styles.container}>
            <LevelSelection 
             isVisible={this.state.showLevelSelection}
             onLevelSelected={this.onLevelSelected} 
             onCancel={() => this.setState({ showLevelSelection: false })} />
            <Header flagsLeft={this.minesAmount() - flaggUsed(this.state.board)} 
             onNewGame={() => this.setState(this.createState())} onFlagPress={() => this.setState({ showLevelSelection: true })} />
            <View style={styles.board}>
                <MineField 
                board={this.state.board} 
                onOpenField={this.onOpenField}
                onSelectField={this.onSelectField}
                />
            </View> 
        </View>
      )
    } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA',
    },
})

export default App
