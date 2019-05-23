import  React, {useState} from 'react';

const CounterB = () =>{
    const [count, setCount] = useState(0)
    const handleIncrease = () =>{
        setCount(count => count + 1)
    }
    const handleDecrease = () =>{
        setCount(count => count - 1)
    }
    return(
        <div>
            {count}
            <button type='button' onClick = {handleIncrease}> +</button>
            <button type='button' onClick = {handleDecrease}> -</button>
        </div>
    );

}
export default CounterB