import React from 'react'
import Footer from './Footer'

const ImageInfo = (props) => {
  return (
    <div className="m-1 border-1 border-gray-200 h-[140px] rounded-xl p-2 ">
       <div className="flex justify-between items-center ">
         <h2 className="font-bold text-xl">{props.name}</h2>
         <p>${props.price.toFixed(2)}</p>
        </div>
        <div className="text-sm text-gray-500">
         <p>{props.intro}</p> 
        </div>
        <Footer />
    </div>
  )
}

export default ImageInfo