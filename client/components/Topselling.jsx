'use client'
import { useState, useEffect} from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';
import Link from 'next/link';

const Topselling = () => {

    const [topSelling, setTopSelling] = useState([
      {
        id: 555,
        name: "Vertical Striped Shirt",
        current_price: 212.00,
        raw_price: 232,
        discount: 20,
        main_image: "https://i.pinimg.com/564x/b0/b0/ec/b0b0ecd81c4e123ad3dec2b8d48abddb.jpg",
        stars: 5,
      },
      {
        id: 556,
        name: "Courage Graphic T-shirt",
        current_price: 145,
        raw_price: 145,
        discount: 0,
        main_image: "https://i.pinimg.com/564x/84/70/35/8470359ae2cbc08886dab82ccde9af8a.jpg",
        stars: 4,
      },
      {
        id: 557,
        name: "Loose Fit Bermuda Shorts",
        current_price: 80,
        raw_price: 80,
        discount: 0,
        main_image: "https://i.pinimg.com/564x/ee/d6/7a/eed67a6738b20463d1f804c361e7ee86.jpg",
        stars: 3,
      },
      {
        id: 558,
        name: "Faded Skinny Jeans",
        current_price: 210,
        raw_price: 210,
        discount: 0,
        main_image: "https://i.pinimg.com/564x/de/ab/cc/deabcc51427ad050d5be52d14070b958.jpg",
        stars: 4.5,
      },
      
    ])
  
    // useEffect(() => {
    // const fetchNewArrivls = async () => {
    //     try{
    //     const data = await axios.get("http://localhost:8800/api/products/topselling")
    //     setTopSelling(data.data)
    //     } catch(err){
    //     console.log(err)
    //     }
    // }
    // fetchNewArrivls()
    // }, [])

    const TOPSELLING = topSelling.map(product => {
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
        <div>
            <div className='h-fit xl:px-24 p-4'>
            <h1 className='text-darkback integral 2xl:text-[3rem] text-[2rem] block text-center 2xl:py-12 py-8'>
                TOP SELLING
            </h1>
            <div className='w-full overflow-x-scroll overflow-y-hidden xl:overflow-hidden'>
              <div className='flex gap-16 w-fit xl:grid xl:grid-cols-4 xl:w-full xl:gap-4 xl:columns-sm'>
                {TOPSELLING}
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <Link href='/topselling' className='2xl:text-3xl w-full xl:w-fit text-center text-xl 2xl:px-20 2xl:py-5 px-12 py-3 border border-[#00000030] rounded-[4rem] satoshi-500 cursor-pointer'>
                View All
              </Link>
            </div>
        </div>
        </div>
    );
};

export default Topselling;