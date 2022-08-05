import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from '@rneui/base'
import users from '../data/users'

export default props => {

    const confirmUserAlter = (user) => {
        Alert.alert('Delete user', 'Do you want to delete this user ?', [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => console.log(`Delete user[${user.id}]: ${user.name}`)} 
        ])
    }


    const getActions = (user) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button 
                    type='clear'
                    icon={<Icon name='edit' size={25} color='yellow'/>}
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <Button 
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'/>}
                    onPress={() => confirmUserAlter(user)}
                />
            </View>
        )
    }


    const getUserItem = ({ item: user }) => {
        return (
            <ListItem 
                key={user.id} 
                bottomDivider
                onPress={() => console.log('Pressed')}>
                <Avatar source={{ uri: user.avatarUrl }}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                    {getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }   
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )
}