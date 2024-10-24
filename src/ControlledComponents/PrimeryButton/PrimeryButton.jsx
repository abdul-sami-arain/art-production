import React from 'react'
import './PrimeryButton.css';
import right from "../../Assets/right.png"

const PrimeryButton = ({
    text, 
    width, 
    height, 
    padding,
    fontSize,
    lineHeight,
    fontWeight,
    color
  }) => {
  return (
    <button className='main-button' 
      style={{
        width: width, 
        height: height, 
        padding: padding,
        fontSize: fontSize,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        color: color,

      }}>
        {text}
        <img src={right} alt="" />
    </button>
  )
}

export default PrimeryButton
