import "../styles/main-card.css";
// import { PropTypes } from "props-types";
import React from 'react';
import Footer from "./Footer";
import Questions from "./Questions";
import StartQuiz from "./StartQuiz";
import { useState, useEffect } from 'react';
// import questions from "./data";


export default function MainCard() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [data, setData] = useState([]);
    const [start, setStart] = useState(false);
    const [player, setPlayer] = useState("");
    const [score, setScore] = useState(0);



    useEffect(() => {
        const getData = async () => {
            const datafromserver = await fetchData()
            setData(datafromserver)
        }
        console.log(data, data.length)
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
                      {start == true ? 
                            (<h1> QUIZZZZ </h1>)
                            : (
        
                                <h1> Question {currentQuestion + 1} </h1>
                        )} 
                    </header>

                    {/* BODY */}

                     {start == true ? (
                        <div className="start-container">

                            <StartQuiz setStart={setStart} setPlayer={setPlayer} />

                        </div>
                    ) :
                        ( 
                            <div className="question-container">

                                {data.length > 0 ? (
                                    <Questions data={data[currentQuestion]} />
                                ) : (
                                    <p>No Questions to show</p>
                                )}
                            </div>
                           )}

                    {/* FOOTER */}
            {start == true ?
                        (<> </>) : ( 
                            <Footer setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} />
                        )}

                    
                </div>
            </div>

        </React.Fragment>
    );

}


// MainCard.propTypes = {
//     number: PropTypes.number
// }
// export default MainCard ;

