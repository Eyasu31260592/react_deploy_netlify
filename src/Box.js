import React from 'react'

const Box = ({color,hexValue}) => {
  return (
    <div 
        className='box'
        style={{backgroundColor: color ? color : ''}}
    >
       <p>{color ? color : 'Empty value'}</p>
       <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

export default Box