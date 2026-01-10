import React  from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, setuser }) => {


  

  const navigator = useNavigate()

  const handchange = () => {
    navigator('/quiz')
    
  }
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white h-[738px]'>
      <h1 className=' p-8 font-bold text-2xl'>Welcome to Quiz page..!</h1>
    
         <section>
          <label htmlFor="name">Name :</label>
          <input required placeholder='Enter your name' onChange={(e) => setuser(e.target.value)} className=' bg-transparent focus:outline-none focus:bg-black bg-black border-b-2 m-1' type="text" name='name' />
        </section>
       
        <br />
        <button disabled={user.length === 0 } onClick={handchange} className='rounded-md p-2 bg-blue-800 hover:bg-blue-500' >submit</button>
      

    </div>
  )
}

export default Home
