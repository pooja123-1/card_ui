import React from 'react'
import { useState } from 'react'

const Footer = () => {
    const [count,setCount]=useState(null);
  const Increment=()=>
  {
      setCount(count+1);
  }
  const Decrement=()=>
  {
        if(count>0)
        {
            setCount(count-1);
        }
  }
  return (
    <div className="flex justify-between items-center "> 
      <div className="flex justify-between items-center gap-2 ">
        <button className="cursor-pointer"onClick={Increment}>+</button>
        <span>{count}</span>
        <button className='cursor-pointer' onClick={Decrement}>-</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Footer