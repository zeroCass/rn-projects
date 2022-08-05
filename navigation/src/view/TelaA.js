import React from 'react'
import TextoCentral from '../components/TextoCentral'
import MenuComponent from '../components/MenuComponent'
import { TouchableHighlight, View } from 'react-native'

export default props => {
    return (
        <View style={{flex: 1}}>
            {/* <MenuComponent {...props} /> */}
            <View style={{ flex: 1 }}>
                <TextoCentral>Tela A</TextoCentral>
            </View> 
        </View>  
    )
}