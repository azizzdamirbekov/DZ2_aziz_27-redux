import { types } from "../types";

const initialState = {
    value: "",
    numbers: 0
}

export default function NumberReducer(state = initialState, action) {
    switch(action.type) {
        case types.NUMBVALUE:
            return{...state, value: action.payload}
        case types.ADD_NUMBER:
            return {...state, numbers:state.numbers + action.payload}
        default: return state
    }
}