import "../styles/main-card.css";
// import { PropTypes } from "props-types";
import React from 'react';
import Button from "./Button";
import { useState } from 'react';
import Timer from "./Timer";



export default function Footer(props) {

    return (
        <footer className="footer">
           
            <div>
                <Timer duration={10 * 1000} setShowScore = {props.setShowScore}/>
            {/* 10*60*1000 */}
                <Button text='Previous'
                    onClick={
                        () => props.setCurrentQuestion(props.currentQuestion - 1)
                    }
                    disabled={props.currentQuestion == 0 ? true : false} />

                <Button text='Next'
                    onClick={() => props.setCurrentQuestion(props.currentQuestion + 1)}
                    disabled={props.currentQuestion == 19 ? true : false}
                />

                <Button text='Submit'
                    onClick={() => {
                        props.setShowScore(true)
                    }} />
            </div>

        </footer>
    )
}

// Button.defaultProps={
//     disabled : false
// }
