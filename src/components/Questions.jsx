import React, { useState, useEffect } from 'react';
import "../styles/main-card.css";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Timer from './Timer';

const Questions = (props) => {
    library.add(faCheck)
    const classes = classNames('btn');


    


    const check = (option) => {
        // let chosen_answer =
        // {
        //     id: props.data.id,
        //     chosen_answer: option,
        //     correct_answer: props.data.correct_answer,
        //     is_correct: option == props.data.correct_answer ? true : false
        // }

        // props.setAnswers([...props.answers, chosen_answer])
        // console.log("before",props.data);
        props.setData([...props.jsondata, props.data.chosen_answer = option]);
        // console.log('affter',props.jsondata);

        if (props.currentQuestion != 19) {
            props.setCurrentQuestion(props.currentQuestion + 1);
        }

        if (option == props.data.correct_answer) {
            props.setScore(props.score + 1);

        }

        if (props.currentQuestion == 19) {
            props.setShowScore(true);
        }
    }


    



    return (
        <React.Fragment>
            <form className='form-body'>
                <label className='question'> {props.data.question} </label>
                <ul>
                    {props.data.options.map((option,idx) => {
                        return (<li>
                            <button
                                className={classes}
                                onClick={(e) => {
                                    console.log(idx);
                                    e.preventDefault();

                                    check(option)
                                }}
                            // style={{ background: props.color }}
                            // key={props.key}
                            >
                                {option}
                            </button>
                            
                         
                              { props.data.chosen_answer == option ?  
                                <FontAwesomeIcon icon="fa-check" /> 
                                : null

                              }
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

