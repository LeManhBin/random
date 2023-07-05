import React from 'react'
import "./circle.scss"
const Circle = (props) => {
  //nhận vào props từ file App.js
  return (
    <div className='circle'>
        <span>{props.number}</span>
    </div>
  )
}

export default Circle