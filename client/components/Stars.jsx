import React from 'react';
import { fullstar, halfstar } from '../assets';

const Stars = ({ stars }) => {
    let counter = 0
    let RATING = []

    for(let i = 0.5; i < stars; i++){
        counter++
        RATING.push(<img key={i} src={fullstar.src} className='w-5 h-5'/>) 
    }
    if(stars - counter === 0.5){
        RATING.push(<img key={stars} src={halfstar.src} className='w-[10px] h-5'/>)
    }

    return (
        <div className='flex no-selection'>
            {RATING}
        </div>
    );
};

export default Stars;