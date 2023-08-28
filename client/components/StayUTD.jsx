import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StayUTD = () => {
    return (
        <div className='xl:px-24 px-4'>
            <div className='bg-darkblack text-basewhite flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between items-center p-6 xl:py-16 xl:px-24 rounded-[1.25rem]'>    
                <h1 className='xl:text-6xl text-3xl integral w-full'>
                    STAY UPTO DATE ABOUT <br className='hidden xl:flex'/> OUR LATEST OFFERS
                </h1>
                <div className='flex flex-col gap-3 xl:gap-6 xl:w-[550px] satoshi-500 w-full'>
                    <div className='relative'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-[#00000060] fa-xl absolute left-6 top-4' />
                        <input type="email" placeholder='Enter your email address' className=' w-full px-2 py-4 xl:py-[1rem] xl:px-[1.5rem] rounded-[3.875rem] text-lg xl:text-xl xl:pl-16 pl-16'/>
                    </div>
                    <button className='text-darkblack text-center px-22 bg-basewhite py-4 xl:px-[1.5rem] rounded-[3.875rem] text-lg xl:text-2xl'>
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StayUTD;