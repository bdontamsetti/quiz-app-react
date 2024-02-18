import React from 'react'
import { useState, useEffect } from 'react';
import Button from './Button'

export default function StartQuiz(props) {

    const [inputValue, setInputValue] = useState('');

    const onStartQuiz = () => {
        props.setStart(false)
        props.setPlayer(inputValue)
    }

    return (
        <form className='form-body'>
            
            <label > Quizee </label>
            <input type="text"
                className='input'
                placeholder="Enter your name"
                required
                onChange={(e) => setInputValue(e.target.value)} />

            <Button text='Start Quiz' 
            onClick={() => onStartQuiz()}
            disabled = {inputValue == "" ? true : false} />

        </form>
    )
}