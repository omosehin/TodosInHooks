import React, {useState} from 'react';
const HookCounter = () =>{
    const [count,setCount] = useState(0);
    

    const HandleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Click {count} times</p>
            <button onClick = {HandleClick}>
                Click Me
            </button>
        </div>)
}

export default HookCounter;