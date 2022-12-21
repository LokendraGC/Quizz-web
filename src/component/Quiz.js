import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import {useEffect} from 'react'
import Questions from './Questions';


const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues].correct_answer,
          ...questions[currQues].incorrect_answers,
        ])
    );
    // console.log(question);
  }, [questions,currQues]);

  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <h3 className='text-center font-bold mb-5 text-3xl mt-8'>Welcom to Quiz {name}</h3>
     {questions?<>

     <div className='grid grid-cols-2 gap-96'>
     <span className='ml-20 font-bold text-2xl capitalize'>{questions[currQues].category}</span>
     <span className='w-10 score font-bold text-2xl capitalize'>Score:{score}</span>
     </div>
     {/* <p>{questions[currQues].question}</p> */}
     <Questions 
     currQues={currQues}
     setCurrQues={setCurrQues}
     questions={questions}
     options={options}
     setOptions={setOptions}
     score={score}
     correct={questions[currQues].correct_answer}
     setScore={setScore}

     />
     </>:
     <CircularProgress className='circle'/>
     
     }


    </div>
  )
}

export default Quiz;
