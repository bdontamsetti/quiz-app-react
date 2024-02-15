import React, { useState } from 'react'
import "../styles/main-card.css";
import Button from './Button'
import classNames from 'classnames';


const Questions = (props) => {

    const classes=classNames('btn');

    const check = (option) => {
        // props.setStart(false);
        console.log(option, props.data.correct_answer);
    }

    console.log('props', props.data)
    return (
        <React.Fragment>

            <form className='form-body'>
                <label className='question'> {props.data.question} </label>
                <ul>
                    {props.data.options.map((option, idx) => {
                        console.log(idx);
                        return (<li>
                            <button 
                            className={classes}
                                onClick={() => check()}
                                
                                // style={{ background: props.color }}
                                // key={props.key}
                            >
                                {option}
                            </button>
                            {/* <Button text={option} 
                        className='option' 
                        key={idx} 
                        value={option}
                        onClick={() => check(option)}/> */}
                        </li>
                        )
                    }   // color='#d9c8e7'

                    )}
                </ul>
            </form>



        </React.Fragment>
    )
}


export default Questions

