"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Nav = () => {

    return (
        <div className='flex flex-col '>
            <div id='signUp' className='px-4 sm:px-28 bg-darkblack text-[0.75rem] sm:text-[0.875rem] h-[2.375rem] w-full flex justify-center items-center text-basewhite '>
                <div>Sign up and get 20% off to your first order. <Link className='font-semibold underline underline-offset-2 cursor-default' href='/signup'>Sign Up Now</Link></div>
                <div className='hidden sm:inline sm:absolute right-28 text-[1rem] cursor-pointer' onClick={() => document.querySelector('#signUp').style.display = "none"}>X</div>
            </div>
        </div>
    );
};



export default Nav;