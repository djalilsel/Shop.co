'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
import Link from 'next/link';

const NewArrivals = () => {

const [newArrivals, setNewArrivals] = useState([
  {
    id: 551,
    name: "T-shirt with Tape Details",
    current_price: 120.00,
    raw_price: 120.00,
    discount: 0,
    main_image: "https://i.pinimg.com/564x/d1/7e/a6/d17ea6f395639cbbf5d2e7fc7874fc99.jpg",
    stars: 4.5,
  },
  {
    id: 552,
    name: "Skinny Fit Jeans",
    current_price: 240.00,
    raw_price: 260.00,
    discount: 20,
    main_image: "https://i.pinimg.com/564x/74/24/c8/7424c8917fe975182d00b80ed8788d68.jpg",
    stars: 3.5,
  },
  {
    id: 553,
    name: "Checkered Shirt",
    current_price: 180.00,
    raw_price: 180.00,
    discount: 0,
    main_image: "https://i.pinimg.com/736x/31/ee/ae/31eeae6c21238a6f45e965af6f72b8ba.jpg",
    stars: 4.5,
  },
  {
    id: 554,
    name: "Sleeve Striped T-shirt",
    current_price: 130.00,
    raw_price: 160.00,
    discount: 30,
    main_image: "https://i.pinimg.com/736x/3f/02/b6/3f02b61a0d0eefa90e5dbe5bba4af0dd.jpg",
    stars: 4.5,
  }
])
  
// useEffect(() => {
//   const fetchNewArrivls = async () => {
//     try{
//       const data = await axios.get("http://localhost:8800/api/products/newarrivals")
//       setNewArrivals(data.data)
//     } catch(err){
//       console.log(err)
//     }
//   }
//   fetchNewArrivls()
// }, [])

const NEWARRIVALS = newArrivals.map(product => {
  return <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.main_image}
            stars={product.stars}
            current_price={product.current_price}
            raw_price={product.raw_price}
            discount={product.discount}
          />
})
  

    return (
        <div className='h-fit xl:px-24 p-4 border-b-2 border-[#00000010]'>
            <h1 className='text-darkback integral 2xl:text-[3rem] text-[2.5rem] block text-center 2xl:py-12 py-8'>
                NEW ARRIVALS
            </h1>
            <div className='w-full overflow-x-scroll overflow-y-hidden xl:overflow-hidden'>
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