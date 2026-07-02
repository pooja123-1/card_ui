import React from 'react'

const ImageContent = (props) => {
  return (
    <div>
        <img  className="rounded-xl object-cover" src={props.img} alt=""/>
    </div>
  )
}

export default ImageContent