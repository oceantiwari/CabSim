import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setUserData] = useState({})
  
  const submitHandler = (e)=>{
    e.preventDefault();  
    setUserData({
      email:email,
      password:password
    })
    setEmail('');
    setpassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt=""/>
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
      <p className='text-center'>New here?<Link to ='/signup' className='text-blue-600'>Create new account</Link></p>

      
        </div>
        <div>
          <Link to='/captain-login' className='bg-[#662ef4] flex item-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin