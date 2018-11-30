import { Component } from 'react';
import store, {DEPOSIT} from './SomeFileWithStore'


class Bank extends Component {
    constructor(){
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>{
            this.setState({
                balance: store.getState().balance
            });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render(){
        return (
            <div>
                <h1> {store.getState().balance} </h1>
                <button onClick = {store.dispatch({type: 'DEPOSIT', amount: 100})}> Deposit 100 </button>
                {/* OR */}
                <button onClick = {store.dispatch(deposit(100))}> Deposit 100 </button>
            </div>
        );
    }
}



//IN store

// ACTION TYPE CONSTANTS
const DEPOSIT = 'deposit';


// ACTION CREATORS
const deposit = amount => ({type: DEPOSIT, amount});
// REDUCER



