import React, { useState } from 'react'
import before from '../../assets/images/floro-cristina-5107-before.jpg';
import after from '../../assets/images/floro-cristina-5107-final.jpg';

export default function RetouchingExample() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className='image-container'>
      {toggle 
        ? <img className='retouching-before' src={before} alt="" onClick={handleClick}/> 
        : <img className='retouching-after' src={after} alt="" onClick={handleClick}/>
      }
    </div>
  )
}
