import React from 'react'
import './Switch.css'

const Switch = ({onClick, leftText, rightText}) => {
 return(
    <div className="switch">
        <label>
            {leftText}<input onClick={onClick} type="checkbox"/>
            <span className="lever"></span>{rightText}
        </label>
    </div>
 )
}

export default Switch;