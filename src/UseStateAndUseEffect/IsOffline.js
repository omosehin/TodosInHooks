import React, { useState,useEffect } from 'react'

const IsOffline = ()=> {
    const [isOffline, setIsOffline] = useState(false)

    function onOffline(){
        setIsOffline(true)
    }
    function onOnline(){
        setIsOffline(false)
    }
    
    useEffect(() => {
        window.addEventListener('offline',onOffline);
        window.addEventListener('online',onOnline);
      return () => {
        window.removeEventListener('offline',onOffline)
        window.removeEventListener('offline',onOnline)
      };
    }, [])

    if (isOffline){
        return <div>Sorry, you are offline</div>
    }
    return <div>You are online</div>
  }

export default IsOffline
