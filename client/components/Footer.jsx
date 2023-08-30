import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faXTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    visa,
    mastercard,
    paypal,
    applepay,
    googlepay
 } from '../assets';

const Footer = () => {
    return (
        <div className=' h-fit xl:p-24 p-4 satoshi-400 flex flex-col pb-16'>
            <div className='mb-16 bg-darkblack text-basewhite flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between items-center p-6 xl:py-16 xl:px-24 rounded-[1.25rem]'>    
                <h1 className='xl:text-6xl text-3xl integral w-full'>
                    STAY UPTO DATE ABOUT <br className='hidden xl:flex'/> OUR LATEST OFFERS
                </h1>
                <div className='flex flex-col gap-3 xl:gap-6 xl:w-[550px] satoshi-500 w-full'>
                    <div className='relative'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-[#00000060] fa-xl absolute left-6 top-4' />
                        <input type="email" placeholder='Enter your email address' className='text-darkblack w-full px-2 py-4 xl:py-[1rem] xl:px-[1.5rem] rounded-[3.875rem] text-lg xl:text-xl xl:pl-16 pl-16'/>
                    </div>
                    <button className='text-darkblack text-center px-22 bg-basewhite py-4 xl:px-[1.5rem] rounded-[3.875rem] text-lg xl:text-2xl'>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-9 xl:flex-row justify-between'>
                <div className='h-full flex flex-col gap-4 justify-between xl:w-96 xl:pr-16'>
                    <span className='integral text-5xl no-selection'>
                        SHOP.CO
                    </span>
                    <p className='text-[#00000060] text-lg'>
                        We have clothes that suits your style and which you're proud to wear. From women to men.
                    </p>
                    <div className='flex gap-4'>
                        <Link href='https://www.twitter.com' target='_blank' className='w-12 h-12 rounded-full border-2 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faXTwitter} className='text-darkblack fa-xl' />
                        </Link>
                        <Link href='https://www.facebook.com' target='_blank' className='w-12 h-12 rounded-full border-2 flex justify-center items-center bg-darkblack'>
                            <FontAwesomeIcon icon={faFacebook} className='text-darkblack bg-basewhite rounded-full fa-xl' />
                        </Link>
                        <Link href='https://www.instagram.com' target='_blank' className='w-12 h-12 rounded-full border-2 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faInstagram} className='text-darkblack fa-xl' />
                        </Link>
                        <Link href='https://www.github.com' target='_blank' className='w-12 h-12 rounded-full border-2 flex justify-center items-center bg-darkblack'>
                            <FontAwesomeIcon icon={faGithub} className='text-darkblack bg-basewhite rounded-full fa-xl' />
                        </Link>
                    </div>
                </div>
                <div className='w-full xl:flex xl:justify-between grid grid-cols-2 gap-6 overflow-hidden'>
                    <div className='h-full flex flex-col justify-between gap-4 xl:w-80'>
                        <span className='text-2xl satoshi-500'>Company</span>
                        <Link href='/support' className='text-[#00000060] text-lg'>About</Link>
                        <Link href='/delivery' className='text-[#00000060] text-lg'>Features</Link>
                        <Link href='/terms' className='text-[#00000060] text-lg'>Works</Link>
                        <Link href='/policy' className='text-[#00000060] text-lg'>Career</Link>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-between w-80'>
                        <span className='text-2xl satoshi-500'>Help</span>
                        <Link href='/support' className='text-[#00000060] text-lg'>Customer Support</Link>
                        <Link href='/delivery' className='text-[#00000060] text-lg'>Delivery Details</Link>
                        <Link href='/terms' className='text-[#00000060] text-lg'>Terms & Conditions</Link>
                        <Link href='/policy' className='text-[#00000060] text-lg'>Privacy Policy</Link>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-between w-80'>
                        <span className='text-2xl satoshi-500'>FAQ</span>
                        <Link href='/about' className='text-[#00000060] text-lg'>Account</Link>
                        <Link href='/features' className='text-[#00000060] text-lg'>Manage Deliveries</Link>
                        <Link href='/works' className='text-[#00000060] text-lg'>Orders</Link>
                        <Link href='/career' className='text-[#00000060] text-lg'>Payments</Link>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-between w-fit'>
                        <span className='text-2xl satoshi-500'>Resources</span>
                        <Link href='/about' className='text-[#00000060] text-lg'>Free eBooks</Link>
                        <Link href='/features' className='text-[#00000060] text-lg'>Development Tutorial</Link>
                        <Link href='/works' className='text-[#00000060] text-lg'>How to - Blog</Link>
                        <Link href='/career' className='text-[#00000060] text-lg'>Youtube Playlist</Link>
                    </div>
                </div>
            </div>
            <hr className='h-4 text-[#00000010] mt-14'/>
            <div className='flex flex-col xl:flex-row xl:justify-between items-center xl:items-start xl:mb-4'>
                <div className='text-[#00000060]'>Shop.co © 2000-2023, All Rights Reserved</div>
                <div className='flex gap-3'>
                    <img src={visa.src} alt="visa" />
                    <img src={mastercard.src} alt="mastercard"/>
                    <img src={paypal.src} alt="paypal"/>
                    <img src={applepay.src} alt="applepay"/>
                    <img src={googlepay.src} alt="googlepay"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;