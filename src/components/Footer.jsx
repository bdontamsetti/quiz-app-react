import "../styles/main-card.css";
// import { PropTypes } from "props-types";
import React from 'react';
import Button from "./Button";
import { useState } from 'react';


export default function Footer(props) {
   
    return (
        <footer className="footer">

            <div>
                <Button text='Previous'
                    onClick = {() => props.setCurrentQuestion(props.currentQuestion - 1)}
                    disabled = {props.currentQuestion == 0 ? true : false} />

                <Button text='Next'
                    onClick = {() => props.setCurrentQuestion(props.currentQuestion + 1)}
                    disabled = {props.currentQuestion == 19 ? true : false} 
                    />

                <Button text='Submit' />
            </div>

        </footer>
    )
}

// Button.defaultProps={
//     disabled : false
// }
