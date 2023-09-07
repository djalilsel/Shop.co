import React from 'react';
import { verified } from '../assets';
import Stars from './Stars';

const ProductReview = ({ username, stars, description, postedAt}) => {

    if(stars - Math.round(stars) !== -0.5){
        stars = Math.round(stars)
    }
    return (
        <div className='w-full rounded-[1.25rem] border-2 border-[#00000010] p-[1.5rem] xl:px-[2rem] xl:py-[1.75rem] flex flex-col justify-around gap-7'>
            <Stars key={username} stars={stars} />
            <div className='flex items-center gap-4'>
                <span className='satoshi-700 text-3xl'>{username}.</span>
                <img src={verified.src} alt="verified" className='w-6 h-6 xl:w-8 xl:h-8'/>
            </div>
            <span className='satoshi-400 text-[#00000060]  xl:text-xl'>{description}</span>
            <span className='satoshi-400 text-darkblack  xl:text-xl'>{postedAt}</span>
        </div>
    );
};

export default ProductReview;