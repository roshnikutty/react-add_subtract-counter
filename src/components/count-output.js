import React from 'react';
import Add from './add';
import Subtract from './subtract';
import './counter.css';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.addCounter = this.addCounter.bind(this);
        this.subtractCounter = this.subtractCounter.bind(this);
        this.state = {
            counter: 0
        };
    }

    addCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    subtractCounter() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div className="main-box">
                <span>Counter: {this.state.counter}</span>
                <div className="controls">
                    <Add onClick={this.addCounter} />
                    <Subtract onClick={this.subtractCounter} />
                </div>
            </div>

        );
    }
}