import {createContext, useReducer} from 'react'

const init = {
    cartItems: []
}


const store = createContext(init)

const {Provider} = store;


// [].reduce((sum, curr)=>{}, initailValue)

const reducer = (state, action) =>{
    switch(action.type){
        case "SET_CART_ITEMS":
            return{
                ...state,
                cartItems:action.payload,

            };

        default:
            return state;
    }
}


const StateProvider = () =>{
    const {state, dispatch} = useReducer(reducer, init)
}



export{
    store,
    Provider
}