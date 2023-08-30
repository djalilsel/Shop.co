'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReviewCard from './ReviewCard'
import { arrowLeft, arrowRight } from '../assets';

const HappyRev = () => {

    const [reviews, setReviews] = useState([])
    const ref = useRef()

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

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          
        }, speed);
      };

    const REVIEWS = reviews.map(review => {
        return <ReviewCard
                    key={review.id}
                    userId={review.user_id}
                    stars={review.stars}
                    description={review.description}
                />
    })
    return (
        <div className=' xl:h-fit w-fill pb-14 xl:pb-0 xl:px-24 px-4 flex flex-col'>
            <div className='flex justify-between xl:items-center items-end'>
                <h1 className='integral py-6 text-3xl xl:py-20 xl:text-6xl'>OUR HAPPY CUSTOMERS</h1>
                <span className='flex gap-2 mr-4 xl:mr-0 h-8 w-fit mb-6 xl:mb-0'>
                    <img src={arrowLeft.src} className='hidden xl:block' alt="arrowLeft" onClick={() => handleHorizantalScroll(ref.current, 25, 150, -10)}/>
                    <img src={arrowLeft.src} className='block xl:hidden' alt="arrowLeft" onClick={() => handleHorizantalScroll(ref.current, 25, 416, -20)}/>
                    <img src={arrowRight.src} className='hidden xl:block' alt="arrowRight" onClick={() => handleHorizantalScroll(ref.current, 25, 150, 10)}/>    
                    <img src={arrowRight.src} className='block xl:hidden' alt="arrowRight" onClick={() => handleHorizantalScroll(ref.current, 25, 416, 20)}/>    
                </span>
            </div>
            <div className='relative w-fill xl:w-screen xl:ml-[-96px]'>
                <div ref={ref} className='overflow-hidden w-fill  xl:px-[96px]'>
                    <div  className='flex gap-10 flex-nowrap w-fit '>
                        {REVIEWS}
                    </div>
                </div>
                <div className='hidden xl:block backdrop-blur-sm w-24 h-full absolute top-0 right-0 z-30'></div>
                <div className='hidden xl:block backdrop-blur-sm w-24 h-full absolute top-0 left-0  z-30'></div>
            </div>
        </div>
    );
};

export default HappyRev;