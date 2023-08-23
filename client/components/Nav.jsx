"use client"
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {

    return (
        <div className='flex flex-col '>
            <div id='signUp' className='px-4 sm:px-32 bg-darkblack text-[0.75rem] sm:text-[0.875rem] h-[2.375rem] w-full flex justify-center items-center text-basewhite '>
                <div>Sign up and get 20% off to your first order. <Link className='font-semibold underline underline-offset-2 cursor-default' href='/signup'>Sign Up Now</Link></div>
                <div className='hidden no-selection sm:inline sm:absolute right-32 text-[1rem] cursor-pointer' onClick={() => document.querySelector('#signUp').style.display = "none"}>X</div>
            </div>
            <div className='h-20 sm:h-24 sm:px-32 px-4 w-full bg-basewhite flex gap-8 items-center boder-2 border-black'>
                <FontAwesomeIcon icon={faBars} className='fa-lg lg:hidden'/>
                <span className='integral sm:text-[2rem] text-2xl no-selection'>
                    SHOP.CO
                </span>
                <nav className='hidden lg:flex justify-center items-center gap-8 satoshi-400 cursor-default'>
                    <span>
                        Shop
                    </span>
                    <span>
                        On Sale
                    </span>
                    <span>
                        New Arrivals
                    </span>
                    <span>
                        Brands
                    </span>
                </nav>
                <div className='hidden sm:flex relative flex-1'>
                    <input type="text" placeholder='Search for products...' 
                        className='satoshi no-selection w-full bg-[#F0F0F0] pl-[2.25rem] p-[0.75rem] rounded-[3.875rem]'
                    />
                    <FontAwesomeIcon icon={faSearch} className='text-[#000] absolute top-4 left-2 px-1' />
                </div>
                <div className='flex-1 sm:hidden'></div>
                <div className='flex gap-4 justify-self-end'>
                    <FontAwesomeIcon icon={faSearch} className='text-[#000] fa-lg flex sm:hidden' />
                    <FontAwesomeIcon icon={faCartShopping} className='text-[#000] fa-lg'/>
                    <FontAwesomeIcon icon={faCircleUser} className='text-[#000] fa-lg'/>
                </div>
            </div>
        </div>
    );
};



export default Nav;