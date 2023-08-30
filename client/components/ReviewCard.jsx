'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { verified } from '../assets';

const ReviewCard = ({ userId, stars, description}) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        async function getUser() {
            try{
                const data = await axios.get(`http://localhost:8800/api/users/${userId}`)
                setUser(data.data)
            } catch(err){
                console.log(err);
            }
        }
        getUser()
    }, [])
    const name = user[0]?.name.split(" ")[0] + " " + user[0]?.name.split(" ")[1][0]
    return (
        <div className='xl:w-[550px] xl:h-[20rem] w-[380px] rounded-[1.25rem] border-4 border-[#00000010] p-[1.5rem] xl:px-[2rem] xl:py-[1.75rem] flex flex-col justify-around gap-1'>
            {stars}
            <div className='flex items-center gap-4'>
                <span className='satoshi-700 text-2xl xl:text-4xl'>{name}.</span>
                <img src={verified.src} alt="verified" className='w-6 h-6 xl:w-8 xl:h-8'/>
            </div>
            <span className='satoshi-400 text-[#00000060]  xl:text-xl'>{description}</span>
        </div>
    );
};

export default ReviewCard;