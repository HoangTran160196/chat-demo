// import { createStore } from "redux"
const { createStore, combineReducers } = require('redux')
const UPDATE_USER = 'UPDATE_USER',
      UPDATE_CONTACT = 'UPDATE_CONTACT'

const merge = (prev, next) => Object.assign({}, prev, next)
const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }
    return state
}
const userReducer = (state = {}, action) => {
    if (action.type === UPDATE_USER) {
        return merge(state.users, action.payload)
    }    
    return state
}

const reducer = combineReducers({
    users: userReducer,
    contact: contactReducer
})



const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
const updateContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

let DEFAULT_STATE = {users: {}, contact: []}
let store = createStore(reducer, DEFAULT_STATE)
store.dispatch(updateUser({name: 'hoang'}))
store.dispatch(updateUser({name: 'hoangUpdate1'}))
store.dispatch(updateContact({address: '1 Fifth Avenue'}))
console.log(store.getState())