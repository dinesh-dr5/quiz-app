import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Quiz = ({ user, setscore }) => {

  const navigator = useNavigate()

  useEffect(() => {
    if (!user) {
      navigator("/")
    }
  }, [user])

  const questions = [
    {
      question: `Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?`,
      options: [`(a) 1/3`, `(b) 1/8`, ` (c) 2/8`, ` (d) 1/16`],
      answer: `(b) 1/8`
    },
    {
      question: `Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?`,
      options: [`(a) 7`, `(b) 10`, ` (c) 12`, ` (d) 13`],
      answer: `(b) 10`
    },
    {
      question: `A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?`,
      options: [`(a) 3.6`, `(b) 7.2`, ` (c) 8.4`, ` (d) 10`],
      answer: `(b) 7.2`
    },
    {
      question: `If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:`,
      options: [`(a) 50 km`, `(b) 56 km`, ` (c) 70 km`, ` (d) 80 km`],
      answer: `(a) 50 km`
    },

    {
      question: `A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :`,
      options: [`(a) 1/4`, `(b) 1/10`, ` (c) 7/15`, ` (d) 8/15`],
      answer: `(d) 8/15`
    },
    {
      question: `A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?`,
      options: [`(a) 120 metres`, `(b) 180 metres`, ` (c) 324 metres`, ` (d) 150 metres`],
      answer: `(d) 150 metres`
    },
    {
      question: `The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:`,
      options: [`(a) 200 m`, `(b) 225 m`, `(c) 245 m`, `(d) 250 m`],
      answer: `(c) 245 m`
    },
    {
      question: `An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:`,
      options: [`(a) 2%`, `(b) 2.02%`, `(c) 4%`, `(d) 4.04%`],
      answer: `(d) 4.04%`
    },
    {
      question: `It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?`,
      options: [`(a) Sunday`, `(b) Saturday`, `(c) Friday`, `(d) Wednesday`],
      answer: `(c) Friday`
    },
    {
      question: `What was the day of the week on 28th May, 2006?`,
      options: [`(a) Thursday`, `(b) Friday`, `(c) Saturday`, `(d) Sunday`],
      answer: `(d) Sunday`
    }


  ]

  //  {
  //     question: ``,
  //     options: [``, ``, ``,``],
  //     answer: ``
  //   },

  const [questionInd, setquestionInd] = useState(0);

  const handanswer = (selectedAns) => {
    const iscorrect = selectedAns === questions[questionInd].answer

    if (iscorrect) {
      setscore((prevScore) => prevScore + 1);
    }
    if (questionInd < questions.length - 1) {
      setquestionInd((prevInd) => prevInd + 1);
    }
    else {
      navigator('/result')
    }
  }

  return (
    <div className='  bg-black text-white h-[738px]'>
      <h1 className='text-center p-8 font-bold text-2xl'>Quiz pages...!</h1>
      <h2>{questionInd + 1} . {questions[questionInd].question}</h2>
      {
        questions[questionInd].options.map(function (option, ind) {
          return <button className='p-3 hover:text-blue-400' key={ind} onClick={() => handanswer(option)}>{option}</button>
        })
      }
      <br />
      <br />
      <br />
      <br />
      <br />

      <Link to='/' onClick={()=>setuser(0)}  className='rounded-md p-1 ml-6  bg-blue-800 hover:bg-blue-500' >  Back to Home</Link>
    </div>
  )
}

export default Quiz






























