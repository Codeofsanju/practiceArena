import { createStore } from 'redux';


// create reducer
const reducer = (state, action) =>{
    if(action.type=== 'DEPOSIT'){
        return {balance: state.balance + action.amount};
    }
    else{
        return state;
    }
};

// create a store with reducer as arg
const store = createStore(reducer);

//returns current state
store.getState(); // {balance: 0}

// update (we pass a type that will be checked by the reducer)
// reducer will then return a new state.
                /*\/\/\/\/\/action\/\/\/\/\/*/
store.dispatch({type: 'DEPOSIT', amount: 100});




store.getState(); // {balance: 100}