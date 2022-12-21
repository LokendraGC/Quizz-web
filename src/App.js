import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './component/Home'
import Quiz from './component/Quiz'
import Result from './component/Result'
// import a from './component/asset/animated.jpg'

function App() {

    const [name, setName] = useState("");
    const [questions, setQuestions] = useState()
    const [score, setScore] = useState(0)
    
    console.log("above")
    
    const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category &&`&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

        // console.log(data.results);
        // console.log(data);
        // console.log("below")
        setQuestions(data.results);


    }
    // console.log()
    return (

        <BrowserRouter>
            <div className=' app bg-gradient-to-r from-cyan-500 to-blue-500 h-full'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home name={name} setName={setName}
                        fetchQuestions={fetchQuestions}
                    />}></Route>
                    <Route path='/quiz' element={<Quiz 
                    name={name}
                    questions={questions}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                    />
                    }></Route>
                    <Route path='/result' element={<Result 
                    name={name}
                    score={score}
                    />}/>

                    
          
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>

    )
}
export default App
