import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Authentication'
import {useNavigate} from 'react-router-dom'
import Navigator from '../components/Navigator'
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginPage = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async(e) => {
        e.preventDefault();
        const data = {
            username,
            password
        };
        login(data)
    }
    
  return (
    <>
        <main className='bg-shopping bg-cover w-screen h-screen font-poppins'>
            <div className='hidden lg:block absolute top-5 left-5 text-white cursor-pointer' onClick={()=>navigate('/product')}>
                <FaArrowLeftLong className='text-3xl hover:text-gray-300 duration-300'/>
            </div>
            <section className='w-full h-full flex flex-col justify-center items-center'>
                <form onSubmit={handleLogin} className='border w-[270px] sm:w-[400px] h-[600px] rounded-3xl flex flex-col justify-center items-center gap-10 backdrop-opacity-5 bg-gray-950 bg-opacity-90 shadow-2xl'>
                    <h1 className='text-gray-100 text-center text-2xl sm:text-3xl font-bold'>Account Login</h1>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg sm:text-xl font-semibold w-full text-gray-400 mt-5 '>Username</label>
                        <input 
                            type="text" 
                            className='bg-transparent border p-3 w-full rounded-lg outline-none text-white'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg sm:text-xl font-semibold w-full text-gray-400'>Password</label>
                        <input 
                            type="password" 
                            className='bg-transparent border p-3 w-full rounded-lg outline-none text-white'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center items-center w-full gap-1'>
                        <p className='text-white'>Dont have an account ?</p>
                        <p className='text-blue-500 underline cursor-pointer' onClick={()=>navigate('/register')}>Register</p>
                    </div>

                    <button 
                        type="submit"
                        className='text-white border p-2 w-44 rounded-full font-bold text-xl mt-5 hover:bg-gray-600 hover:border-gray-600 duration-300'
                        >Log in</button>

                </form>
            </section>
        </main>
    </>
  )
}

export default LoginPage