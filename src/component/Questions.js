// import { Button } from '@mui/material';
import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

// import { useHistory } from "react-router-dom";


function Questions(
    {
        currQues,
        setCurrQues,
        questions,
        options,
        setOptions,
        score,
        setScore,
        correct
    }
) {

    console.log('ayo qsn');
    console.log(questions)
    // console.log(questions[currQues].question);

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select";
        } else if (selected === i && selected !== correct) {
            return "wrong";
        }
        else if (i === correct) {
            return "select";
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const navigate = useNavigate();
    const handleNext = () => {
        if (currQues > 8) {
            navigate("/result")
        }
        else if (selected) {
            setCurrQues(currQues + 1)
            setSelected()
        } else {
            setError("Please select an option first")
        }
    }

    const handleQuit = () => {
        setCurrQues(0);
        // setQuestions();
    };

    return (
        <div>
            <h1 className='qsn'>Question No. {currQues + 1}</h1>
            <div>
                <h2 className='text-2xl font-semibold ml-6'>{questions[currQues].question}</h2>
                <div className="ml-6 grid grid-cols-2 gap-6 mt-10">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options && options.map(i =>
                        <button className={`bg-white pt-4 tb-4 ${selected && handleSelect(i)}
                        `
                        }
                            key={i}
                            onClick={() => handleCheck(i)}
                            disabled={selected}
                        >
                            {i}
                        </button>
                    )}

                </div>
                <div className="control mt-10">
                    <button className='text-2xl font-semibold mr-10 bg-blue-800 w-44 rounded-md pt-4 pb-4'
                        href="/"
                        onClick={handleQuit}
                    >
                        Quit
                    </button>
                    <button className='text-2xl font-semibold bg-blue-800 w-44 pb-4 pt-4 rounded-md'
                        onClick={handleNext}
                    >
                        Next Question
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Questions