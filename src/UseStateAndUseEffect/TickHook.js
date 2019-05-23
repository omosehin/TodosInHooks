import React, {useState,useEffect} from 'react'

const TickHook = () =>{

    const [isOn, setIsOn] = useState(false);
    const [timer, setTimer] = useState(0);
    const HandleStart = () =>{
        setIsOn(true)
    }
    const HandleStop = () =>{
        setIsOn(false)
    }

    useEffect(() => {   
        let interval;
      if(isOn){interval = setInterval (()=>setTimer(timer => timer + 1),1000)
      }
      return () => clearInterval(interval)
    },[isOn])

    const onReset = () => {
        setIsOn(false);
        setTimer(0);
    }
    return (
    <div>
        {timer}
      {!isOn && (<button onClick = {HandleStart}>Start</button>)}
      {isOn && (<button onClick = {HandleStop}>Stop</button>)}
        
    <button type = 'button' disabled = {timer === 0} onClick = {onReset}>
        Reset
    </button>
</div>
  )
}

export default TickHook