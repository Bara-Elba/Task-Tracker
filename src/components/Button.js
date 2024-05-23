import React from 'react'
import PropType from 'prop-types'


const Button = ({color, text, onClick}) => {

  return (
    <button onClick={onClick} style={{ backgroundColor : color}} className='btn'>{text}</button>
  )
}

Button.defaultProp = {
    color : 'steelblue',
    text: 'Button'
}

Button.prototype = {
    text : PropType.string,
    color: PropType.string,
    onClick : PropType.func.isRequired,

}

export default Button
