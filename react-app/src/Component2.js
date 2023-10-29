import React, {Component} from 'react';

class Component2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Component2</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        );
    }
}

export default Component2;