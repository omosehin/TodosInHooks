import  React, {Component}  from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    handleCount = () =>{
        this.setState({count:this.state.count + 1})
    }

    render(){
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick = {this.handleCount}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default Counter;