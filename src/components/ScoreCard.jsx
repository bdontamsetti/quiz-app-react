import React from 'react'
import Button from './Button'


export default function ScoreCard(props) {
    
    const onStartAgain = () => {
        props.setScore(0);
        props.setCurrentQuestion(0);
        props.setStart(true);
        props.setShowScore(false);
        window.location.reload();
    }
    
    return (
        <div >

            <h3 >{props.player}, YOUR FINAL SCORE IS </h3>
            <h2>{props.score}</h2>

            <Button text='Start Again' 
            onClick={() => onStartAgain()}
            />
            
     </div>
    )
}