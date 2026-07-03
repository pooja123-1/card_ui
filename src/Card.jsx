import React from 'react'
import ImageContent from './ImageContent'
import ImageInfo from './ImageInfo'

const Card = (props) => {
  return (
    <div className ="h-[322px] w-[249px]  bg-white  shadow-lg shadow-black-950  overflow-hidden rounded-3xl">
      < ImageContent img={props.img}/>
      <ImageInfo name={props.name} price={props.price} intro={props.intro} tag={props.tag} />
    </div>
  )
}


export default Card