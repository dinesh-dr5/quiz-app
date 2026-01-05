import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

const App = () => {

  const [user, setuser] = useState("")
  const [score, setscore] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user} setuser={setuser} />}></Route>
        <Route path='/quiz' element={<Quiz user={user} setscore={setscore} />}></Route>
        <Route path='/result' element={<Result user={user} score={score} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App