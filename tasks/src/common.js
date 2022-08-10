import { Platform, Alert } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

const showError = (err) => {
    console.log('showError:', err)
    Alert.alert(`Ops!Algo deu errado: ${err}`)
}

const showSucess = (msg) => {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSucess }