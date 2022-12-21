import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react'
import Categories from './Data/Categories';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import ErrorMessage from './ErrorMessage';


function Home({name,setName,fetchQuestions}) {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate();
    console.log(navigate);
       const handleSubmit =()=>{
          if(!category||!difficulty||!name){
            setError(true);
          }else{
            setError(false);
            fetchQuestions(category,difficulty);
            navigate('/quiz');
          }
       }

  console.log(Categories);
  return (
    <>
      <div className='p-10  grid grid-cols-2'>
        <div className='text-2xl font-bold '>Quiz Setting
          <div className='mt-6 flex flex-col w-96 font-semibold'>

             {error&&<ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <TextField
              label="Enter Your Name"
              variant="outlined"
              onChange={(e)=>setName(e.target.value)}
            />


            <br />
            <TextField
              select
              label="Select Category"
              variant='outlined'
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            >

              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}

            </TextField>

            <div className='mt-10'>

            </div>

            <TextField
              select
              label="Select Difficulty"
              variant='outlined'
              className='mt-10'
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Difficult" value="difficult">
                Difficult
              </MenuItem>

            </TextField>
            <div className='mt-10'>
              </div>
              <Button
                variant='contained'
                color="primary"
                size="large"
                onClick={handleSubmit}
              >
                Start Quiz
              </Button>
          
          </div>

        </div>
        <div className='banner '>
          <img src="/quiz.svg"
            alt="quiz" />
        </div>
      </div>

    </>

  )
}

export default Home;
