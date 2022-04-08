import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {      
        console.log('Updating Counter')
      return () => {
        console.log("Unmounting")
      }
    }, [count])
    
  return (
    <div>
        <h2>Counter App with Hooks</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
            <span>{count}</span>
        <button onClick={()=>count>0?setCount(count-1):count}>-</button>
        


    </div>
  )
}

export default Counter