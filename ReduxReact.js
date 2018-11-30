import { Component } from 'react';
import store from './SomeFileWithStore'


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
            </div>
        );
    }
}



