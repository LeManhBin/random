import React from 'react'
import "./circle.scss"
const Circle = (props) => {
  return (
    <div className='circle'>
        <span>{props.number}</span>
    </div>
  )
}

export default Circle