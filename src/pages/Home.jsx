import React, { useEffect, useState } from 'react'

const Home = () => {

  const [count, setCount] = useState(0);


  useEffect(() => {
    // side effect
  console.log("Extra Line of Logic...");
  }, []);
  


  return (
    <>

        <p>Home Screen</p>

        <div>
          <p>{count}</p>

          <button onClick={() => setCount(count+1)}>ADD</button>
        </div>
    
    </>
  )
}

export default Home