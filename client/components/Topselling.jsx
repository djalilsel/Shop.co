'use client'
import { useState, useEffect} from 'react';
import axios from 'axios'
import ProductCard from './ProductCard';

const Topselling = () => {

    const [topSelling, setTopSelling] = useState([])
  
    useEffect(() => {
    const fetchNewArrivls = async () => {
        try{
        const data = await axios.get("http://localhost:8800/api/products/topselling")
        setTopSelling(data.data)
        } catch(err){
        console.log(err)
        }
    }
    fetchNewArrivls()
    }, [])

    const TOPSELLING = topSelling.map(product => {
    return <ProductCard
                key={product.id}
                name={product.name}
                image_url={product.image_url}
                stars={product.stars}
                current_price={product.current_price}
                discount={product.discount}
            />
    })
    return (
        <div>
            <div className='xl:h-screen h-fit xl:px-24 p-4'>
            <h1 className='text-darkback integral 2xl:text-[3rem] text-[2rem] block text-center 2xl:py-12 py-8'>
                TOP SELLING
            </h1>
            <div className='w-full overflow-hidden'>
              <div className='flex gap-16 w-fit xl:grid xl:grid-cols-4 xl:w-full xl:gap-4 xl:columns-sm'>
                {TOPSELLING}
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <div className='2xl:text-3xl w-full xl:w-fit text-center text-xl 2xl:px-20 2xl:py-5 px-12 py-3 border border-[#00000030] rounded-[4rem] satoshi-500 cursor-pointer'>
                View All
              </div>
            </div>
        </div>
        </div>
    );
};

export default Topselling;