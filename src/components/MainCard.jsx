import "../styles/main-card.css";
// import { PropTypes } from "props-types";
import React from 'react';
import Footer from "./Footer";
import Questions from "./Questions";
import StartQuiz from "./StartQuiz";
import { useState, useEffect } from 'react';
import ScoreCard from "./ScoreCard";

// import questions from "./data";


export default function MainCard() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [data, setData] = useState([]);
    const [start, setStart] = useState(true);
    const [player, setPlayer] = useState("");
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    useEffect(() => {
        const getData = async () => {
            const datafromserver = await fetchData()
            setData(datafromserver)
        }
        console.log(data)
        getData();
    }, [])

    // GET DATA

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/data");
        const data = await res.json();
        return data;
    }

    
    return (
        <React.Fragment>
            <div className="container">
                <div className="main-card">
                    {/* {console.log(start, player)} */}
                    {/* HEADER */}
                    <header>
                        {start == true && showScore == false ?
                            (<h1> QUIZZZZ </h1>)
                            : start == false && showScore == false ?
                                (<h1> Question {currentQuestion + 1} </h1>)
                                : (<h1> FINAL SCORE </h1>)
                        }
                    </header>

                    {/* BODY */}

                    {start == true && showScore == false ? (
                        <div className="start-container">

                            <StartQuiz setStart={setStart} setPlayer={setPlayer} />

                        </div>
                    ) : start == false && showScore == false ?
                        (
                            <div className="question-container">

                                {data.length > 0 ? (
                                    <Questions data={data[currentQuestion]}
                                        setData = {setData}
                                        jsondata = {data}
                                        setCurrentQuestion={setCurrentQuestion}
                                        currentQuestion={currentQuestion}
                                        setScore={setScore}
                                        score={score}
                                        setShowScore={setShowScore}
                                       
                                    />
                                ) : (
                                    <p>No Questions to show</p>
                                )}
                            </div>
                        )
                        : (
                        <div className="score-container">
                            <ScoreCard 
                            player={player}
                            score={score}
                            setShowScore={setShowScore}
                            setStart={setStart}
                            setScore = {setScore}
                            setCurrentQuestion = {setCurrentQuestion}
                             />
                        </div>
                        )

                    }

                    {/* FOOTER */}
                    {start == false && showScore == false?
                        (
                            <Footer 
                            setCurrentQuestion={setCurrentQuestion} 
                            currentQuestion={currentQuestion}
                            setShowScore={setShowScore} 
                            // setData = {setData}
                            />
                        )
                       : (<> </>) 
                    }


                </div>
            </div>

        </React.Fragment>
    );

}


// MainCard.propTypes = {
//     number: PropTypes.number
// }
// export default MainCard ;

