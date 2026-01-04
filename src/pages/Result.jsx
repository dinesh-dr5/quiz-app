import React, { useEffect } from 'react'
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
            <h1 className='p-5 text-xl'>hello {user} , your score is {score}.</h1>
            <Link to='/' className=' rounded-md p-1  bg-blue-800 hover:bg-blue-500 ' >Back to Home</Link>
        </div>
    )
}

export default Result


















