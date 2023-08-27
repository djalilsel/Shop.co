'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard'
import { arrowLeft, arrowRight } from '../assets';

const HappyRev = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function getReviews() {
            try{
                const data = await axios.get("http://localhost:8800/api/reviews/happycustomers")
                setReviews(data.data)
            } catch(err){
                console.log(err);
            }
        }
        getReviews()
    }, [])

    const REVIEWS = reviews.map(review => {
        return <ReviewCard
                    key={review.id}
                    userId={review.user_id}
                    stars={review.stars}
                    description={review.description}
                />
    })
    return (
        <div className='h-[45vh] xl:h-[55vh] w-fill xl:px-24 px-4 overflow-hidden flex flex-col'>
            <div className='flex justify-between xl:items-center items-end'>
                <h1 className='integral py-6 text-3xl xl:py-20 xl:text-6xl'>OUR HAPPY CUTROMERS</h1>
                <span className='flex gap-2 mr-4 xl:mr-0 h-8 w-fit mb-6 xl:mb-0'>
                    <img src={arrowLeft.src} alt="arrowLeft" />
                    <img src={arrowRight.src} alt="arrowRight" />    
                </span>
            </div>
            <div className='flex gap-10 flex-nowrap w-fit'>
                {REVIEWS}
            </div>
        </div>
    );
};

export default HappyRev;