import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Result = ({ user, score }) => {

    const navigator = useNavigate()


    useEffect(() => {
        if (!user) {
            navigator("/")
        }
    }, [user])


    return (
        <div className='flex flex-col justify-center items-center bg-black text-white h-[738px]'>
            <h1 className=' p-8 font-bold text-2xl'>Quiz Completed...!</h1>
            <h1 className='p-5 text-xl '>hello <span className='font-bold uppercase p-1'> {user}</span> , your score is <span className='font-bold text-xl'>{score}</span> .</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to='/'  onClick={()=>setuser(0)} className=' rounded-md p-1  bg-blue-800 hover:bg-blue-500 ' >Back to Home</Link>
        </div>
    )
}

export default Result


















