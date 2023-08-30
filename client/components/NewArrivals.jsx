'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
import Link from 'next/link';

const NewArrivals = () => {

const [newArrivals, setNewArrivals] = useState([])
  
useEffect(() => {
  const fetchNewArrivls = async () => {
    try{
      const data = await axios.get("http://localhost:8800/api/products/newarrivals")
      setNewArrivals(data.data)
    } catch(err){
      console.log(err)
    }
  }
  fetchNewArrivls()
}, [])

const NEWARRIVALS = newArrivals.map(product => {
  return <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            stars={product.stars}
            current_price={product.current_price}
            discount={product.discount}
          />
})
  

    return (
        <div className='h-fit xl:px-24 p-4 border-b-2 border-[#00000010]'>
            <h1 className='text-darkback integral 2xl:text-[3rem] text-[2.5rem] block text-center 2xl:py-12 py-8'>
                NEW ARRIVALS
            </h1>
            <div className='w-full overflow-x-scroll overflow-y-hidden'>
              <div className='flex gap-16 w-fit xl:grid xl:grid-cols-4 xl:w-full xl:gap-4 xl:columns-sm'>
                {NEWARRIVALS}
              </div>
            </div>
            <div className='flex justify-center my-7'>
              <Link href='/newarrivals' className='2xl:text-3xl w-full xl:w-fit text-center text-xl 2xl:px-20 2xl:py-5 px-12 py-3 border border-[#00000030] rounded-[4rem] satoshi-500 cursor-pointer'>
                View All
              </Link>
            </div>
        </div>
    );
};

export default NewArrivals;