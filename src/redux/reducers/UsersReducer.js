import { types } from "../types";

const initialState = {
    value: "",
    users: []
}

export default function UsersReducer(state = initialState, action){
    switch(action.type){
        case types.VALUE:
            return{...state, value: action.payload}
        case types.USERS:
            return{...state, users: [...state.users, action.payload]}
        case types.DELETE_ALL:
            return {...state, users: []}
        default: return state
    }
}