import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Toggle = () => {

    const [navToggle, setNavToggle] = useState(false);

    const handleToggle = () => {
        setNavToggle(!navToggle);

        console.log(navToggle);
    }

  return (
    <>
    

        <button onClick={handleToggle} className='bg-blue-200'>Toggle</button>

        <div className={`bg-red-300 ${navToggle ? "" : "hidden"}   `}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/products">Products</Link>
                </li>

                <li>
                    <Link to="/counter-app">Counter</Link>
                </li>
            </ul>
        </div>
    
    
    </>
  )
}

export default Toggle