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
    <div className="flex  justify-between mt-5 items-center "> 
      <div className="flex justify-between items-center gap-4 ">
        <button className="cursor-pointer w-7 h-7 justify-center  items-center bg-black shrink-0 text-white rounded-full"onClick={Increment}>+</button>
        <span className='leading-none text-lg'>{count}</span>
        <button className='cursor-pointer  w-7 h-7 justify-center  items-center bg-black shrink-0 text-white rounded-full' onClick={Decrement}>-</button>
      </div>
      <button className='bg-black  h-6 w-20 text-white font-normal text-[12px] rounded-2xl'>Add to Cart</button>
    </div>
  );
}

export default Footer