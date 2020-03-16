import React from 'react'
import before from '../../assets/images/floro-cristina-5107-before.jpg';
import after from '../../assets/images/floro-cristina-5107-final.jpg';

export default function RetouchingExample() {
  
  return (
    <div className='image-container'>

      <img className='retouching-before' src={before} alt=""/>
      <img className='retouching-after' src={after} alt=""/>

    </div>
  )
}
