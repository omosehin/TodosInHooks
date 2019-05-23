import React, { Component } from 'react'

export default class CounterC extends Component {
    state = {
        value : 0
    };

    HandleIncrease = () =>{
        this.setState(prevState=>({
            value:prevState.value + 1
        }))
    }

    HandleDecrease = () =>{
        this.setState(prevState =>({
            value:prevState.value - 1
        }))
    }

  render() {
    return (
      <div>
          {this.state.value}
        <button onClick = {this.HandleIncrease}>Increment</button>
        <button onClick = {this.HandleDecrease}>Decrement</button>
      </div>
    )
  }
}
