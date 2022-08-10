import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    ImageBackground, 
    FlatList,
    Platform,
    TouchableOpacity,
    Alert, 
} from 'react-native'

// assets and other libraries
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'

//components
import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = { tasks: [], visibleTasks: [], showDoneTasks: false, showAddTask: false }

export default class TaskList extends Component {
     
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state)
    }

    toggleTask = taskId => {
        const tasks = this.state.tasks
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt !== null 
                    ? task.doneAt = null
                    : task.doneAt = new Date()  
            }
        })
        this.setState({ tasks }, this.filterTasks)
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) visibleTasks = [...this.state.tasks]

        else {
            const pendding = (task) => task.doneAt === null 
            visibleTasks = this.state.tasks.filter(pendding)
        }
        this.setState({ visibleTasks }, () => {
            AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
        })
    }

    addTask = task => {
        if (!task.desc || !task.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada.')
            return
        }
        console.log(task)
        const tasks = [...this.state.tasks]
        tasks.push(task)
        this.setState({ tasks }, this.filterTasks)
    }

    deleteTask = (taskId) => {
        const tasks = [...this.state.tasks]
        const newTasks = tasks.filter(task => task.id !== taskId)
        this.setState({ tasks: newTasks }, this.filterTasks)
    }

    render() {
        const today = dayjs().locale(ptbr).format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} 
                    onCancel={() => this.setState({ showAddTask: false })} 
                    onSave={this.addTask} />
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                        <Icon name={this.state.showDoneTasks ? 'eye': 'eye-slash'} 
                            size={20} color='#FFF'/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList 
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask}/> }
                    />
                </View>
                <TouchableOpacity 
                    style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTask: true })}
                >
                    <Icon name='plus' size={30} color={'#FFF'} />
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        justifyContent: 'center',
        alignItems: 'center',
    },

})