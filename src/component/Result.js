import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Result({name,score}) {

 const navigate = useNavigate();
   
useEffect(()=>{
      if(!name){
        navigate("/")
      }     
  },[name,navigate])
  return (
    <div className='result flex flex-col items-center md:text-center h-80'>
            <span className='title text-lg '>Final Score:{score}</span>

            <Button
            variant="contained"
            color='secondary'
            size='large'
            style={{alignSelf:"center", marginTop:20}}
            href="/"
            >
              Go to HomePage
            </Button>
            {/* <button onClick={()=>Navigate(-1)}>Go To Homepage</button> */}
    </div>
  )
}

export default Result
