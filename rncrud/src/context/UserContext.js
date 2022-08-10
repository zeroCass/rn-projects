import React, { createContext, useReducer } from 'react'
import users from '../data/users'


const initialState = { users }
const UserContext = createContext({})
const actions = {
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    },

    addUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: [...state.users, user]
        }
    },

    editUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === user.id ? user : u)
        }
    }
}


export const UserProvider = ({ children }) => {

    // funcao que sera chamado apos o dispatch
    // tem o objetivo de chamar a funcao que altera o atributo especifico
    // essa funcao evolui o estado da aplicacao
    const reducer = (state, action) => {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    // recebe como parametro a funcao reducer e o estado incial
    // retorna O ESTADO e o dispatch que eh responsavel por chamar o reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext