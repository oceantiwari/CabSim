import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [captainData, setCaptainData] = useState('')
  
  const submitHandler = (e)=>{
    e.preventDefault();  
    setCaptainData({
      email:email,
      password:password
    })
    setEmail('');
    setpassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-10' src = "https://pngimg.com/uploads/uber/small/uber_PNG28.png" alt=""/>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
      <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
      <input 
      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email"
       required 
       value={email}
       onChange={(e)=>{
        setEmail(e.target.value)
       }}
       placeholder='abc@gmail.com'
       />
      <h3 className='text-lg font-medium mb-2'>Enter password</h3>
      <input className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
      type="password" 
      value={password}
       onChange={(e)=>{
        setpassword(e.target.value)
       }}
      placeholder='password'/>
      
      <button 
      className='bg-[#111] text-white font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
      >Login</button>
      </form>
      <p className='text-center'>Join a fleet?<Link to ='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>

      
        </div>
        <div>
          <Link to='/login' className='bg-[#36dbb5] flex item-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin