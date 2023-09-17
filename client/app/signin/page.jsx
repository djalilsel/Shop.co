'use client'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { apple, facebook, google } from '../../assets';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter()
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        user: '',
        password: '',
    })

    const singin = async () => {
        try{
            const data = await axios.post("http://localhost:8800/api/auth/signin", input, { withCredentials: true})
            console.log(data.data);
            localStorage.setItem('user', JSON.stringify(data.data.user))
            localStorage.setItem('cart', JSON.stringify(data.data.cart))
            router.push('/home')
        } catch(err){
            setError(err.response.data)
        }
    }
    const showPass = () => {
        document.querySelector('#pass').type = "text"
        document.querySelector('#hideeye').classList.add('block')
        document.querySelector('#hideeye').classList.remove('hidden')
        document.querySelector('#eye').classList.add('hidden')
    }
    const hidePass = () => {
        document.querySelector('#pass').type = "password"
        document.querySelector('#eye').classList.add('block')
        document.querySelector('#eye').classList.remove('hidden')
        document.querySelector('#hideeye').classList.add('hidden')
    }
    
    const handleChange = (e) => {
        setInput(prevInput => ({...prevInput, [e.target.name]: e.target.value}))
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='absolute top-0 left-0 z-40 w-full h-20 2xl:h-24 xl:px-32 px-4 flex justify-between gap-8 items-center border-b border-[#00000060]'>
                <Link href='/home' className='integral sm:text-[2rem] text-2xl no-selection'>
                    SHOP.CO
                </Link>
                <div className='flex gap-4 xl:w-56 w-40 satoshi-700'>
                    <Link href='/signup' className='flex-1 text-center border border-darkblack py-3 px-6'>
                        SIGN UP
                    </Link>
                </div>
            </div>
            <div className='xl:border-2 py-6 xl:px-16 flex flex-col gap-4 2xl:gap-12 items-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='satoshi-500 text-3xl'>Sign up to <span className='integral'>Shop.co</span></h1>
                    <span className='satoshi-400 text-[#00000060] text-sm'>FIND CLOTHES THAT MATCHES YOUR STYLE</span>
                </div>
                <div className='flex flex-col w-full satoshi-400'>
                    <div className='relative w-full'>
                        <input name='user' type="text" value={input.user} onChange={handleChange} className='border xl:w-96 w-96 p-3 pt-8 text-[#00000080]' />
                        <span className='absolute top-3 left-3 text-sm'>User</span>
                    </div>
                    <div className='relative w-full'>
                        <input id='pass' name='password' type="password" value={input.password} onChange={handleChange} className='border p-3 pt-8 w-full text-[#00000080]' />
                        <span className='absolute top-3 left-3 text-sm'>Password</span>
                        <FontAwesomeIcon id='eye' icon={faEye} className='text-darkblack absolute top-10 right-3' onClick={showPass}/>
                        <FontAwesomeIcon id='hideeye' icon={faEyeSlash} className='hidden text-darkblack absolute top-10 right-3' onClick={hidePass}/>
                    </div>
                </div>
                {error && <span className='satoshi-400 py-4 text-[#bc4646] text-xl self-start my-[-22px]'>{error}</span>}
                <div className='flex justify-between w-full gap-3 text-[#00000080] self-start'>
                    <div className='flex items-center gap-1'>
                        <input type='checkbox' className='accent-darkblack w-5 h-5'/>
                        <span className='text-sm underline underline-offset-2'>Remember Me</span>
                    </div>
                    <span className='underline underline-offset-2'>Forgot Password?</span>
                </div>
                <div className='flex justify-center w-full satoshi-700 border bg-darkblack text-basewhite py-3 px-6' onClick={singin}>
                   SIGN IN
                </div>
                <span>OR</span>
                <div className='flex gap-9'>
                    <img src={google.src} alt="google" className='w-9 h-9'/>
                    <img src={apple.src} alt="apple" className='w-9 h-9'/>
                    <img src={facebook.src} alt="facebook" className='w-9 h-9'/>
                </div>
            </div>
        </div>
    );
};

export default page;