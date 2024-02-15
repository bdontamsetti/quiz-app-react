import React from 'react'
import "../styles/main-card.css";
import classNames from 'classnames';

export default function Button(props) {

    const classes=classNames('btn',props.className)

    return (
        <button className={classes}
         onClick={()=>props.onClick()}
            disabled={props.disabled}
            style = {{background : props.color}}
            key={props.key}
            >
            {props.text}
        </button>
    )
}

