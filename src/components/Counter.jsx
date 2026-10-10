import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(100);

    function handleCounter(){
        setCount(count+1);
    }

  return (
    <>
            <div>
                <p>Counter : {count}</p>
                <button onClick={handleCounter}>ADD</button>
            </div>
    </>
  )
}

export default Counter