'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { arrowDown, filters, inArrow, minus, plus } from '../../../../assets';
import Stars from "../../../../components/Stars"
import ProductReview from '../../../../components/ProductReview';
import Link from 'next/link';
import ProductCard from '../../../../components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const page = () => {

    let url = usePathname().split("/")
    url = url.map(word => (word.toUpperCase()[0] + word.slice(1)))

    // const [product, setProduct] = useState({})
    const product = {
        name: "ONE LIFE GRAPHIC T-SHIRT",
        rating: 4.5,
        current_price: 260,
        raw_price: 300,
        discount: 40,
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        color_0: "#4F4631",
        color_1: "#314F4A",
        color_2: "#31344F",
        main_image: "https://i.pinimg.com/564x/19/33/95/193395e4e40372bea8a517ecc2442487.jpg",
        image_2: "https://i.pinimg.com/564x/ed/5f/34/ed5f34ce51ae6935a9d6c363bfab0dab.jpg",
        image_3: "https://i.pinimg.com/564x/ac/b7/99/acb799092c2db569ec8c4854c7c14b78.jpg",
        sizes: ["Small", "Medium", "Large", "X-Large"],
        quantity: 1
    }
    const reviews = [
        {
            stars: 4.5,
            userName: "Samantha D.",
            description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            posted: "Posted on August 14, 2023"
        },
        {
            stars: 4,
            userName: "Alex M.",
            description: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            posted: "Posted on August 15, 2023"
        },
        {
            stars: 3.5,
            userName: "Ethan R.",
            description: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
            posted: "Posted on August 16, 2023"
        },
        {
            stars: 4,
            userName: "Olivia P.",
            description: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
            posted: "Posted on August 17, 2023"
        },
        {
            stars: 4,
            userName: "Liam K.",
            description: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
            posted: "Posted on August 18, 2023"
        },
        {
            stars: 4.5,
            userName: "Ava H.",
            description: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
            posted: "Posted on August 19, 2023"
        }
    ]


    const URL = url.map((word, index) => {
        if(index !== 0){
            if(index === (url.length - 1)){
                return <div className='text-[#000]'><FontAwesomeIcon icon={faAngleRight} className='inline'/> T-shirts</div>
            } else if(index !== 1){
                return <div className=''><FontAwesomeIcon icon={faAngleRight} className='inline'/> {word}</div>
            } else{
                return <div>{word}</div>
            }
        }
    })

    const REVIEWS = reviews.map(review => {
        return <ProductReview
                    key={review.posted}
                    username={review.userName}
                    stars={review.stars}
                    description={review.description}
                    postedAt={review.posted}
                />
    })

    const mightLike = [
        {
            id: 222,
            name: "Polo with Contrast Trims",
            main_image: "https://i.pinimg.com/564x/9b/cb/33/9bcb33772d201b7d995e358fd3c96a94.jpg",
            stars: 4.0,
            current_price: 212,
            raw_price: 232,
            discount: 20
        },
        {
            id: 333,
            name: "Gradient Graphic T-shirt",
            main_image: "https://i.pinimg.com/564x/66/c0/44/66c04479b6275203b1c20cb824ccff65.jpg",
            stars: 3.5,
            current_price: 145,
            raw_price: 145,
            discount: 0
        },
        {
            id: 444,
            name: "Polo with Tipping Details",
            main_image: "https://i.pinimg.com/564x/a8/14/dc/a814dc98d1c56249130dffc3a5ce578a.jpg",
            stars: 4.5,
            current_price: 180,
            raw_price: 180,
            discount: 0
        },
        {
            id: 555,
            name: "Black Striped T-shirt",
            main_image: "https://i.pinimg.com/564x/07/c9/7f/07c97fa0104cf2803107792be5cf3779.jpg",
            stars: 5.0,
            current_price: 120,
            raw_price: 150,
            discount: 30
        },
    ]
  

    const MIGHTLIKE = mightLike.map(product => {
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
        <div className='xl:px-24 px-4 py-9 flex flex-col gap-12'>
            <div className='flex gap-2 satoshi-400 text-[#00000060]'>{URL}</div>
            <div className='flex flex-col xl:flex-row xl:h-[600px] gap-5'>
                <div className='flex flex-col-reverse xl:flex-row gap-5'>
                    <div className='flex xl:flex-col gap-4'>
                        <div className='bg-[#F0EEED] h-48 xl:h-64 w-48 overflow-hidden flex justify-center items-center rounded-[1.25rem]'>
                            <img src={product.main_image} alt="product image" className='h-64 '/>
                        </div>
                        <div className='bg-[#F0EEED] h-48 xl:h-64 w-48 overflow-hidden flex justify-center items-center rounded-[1.25rem]'>
                            <img src={product.image_2} alt="product image" className=' h-64 bg-[#F0EEED]'/>
                        </div>
                        <div className='bg-[#F0EEED] h-48 xl:h-64 w-48 overflow-hidden flex justify-center items-center rounded-[1.25rem]'>
                            <img src={product.image_3} alt="product image" className=' h-64 bg-[#F0EEED]'/>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <img src={product.main_image} alt="product image" className='w-full h-fill rounded-[1.25rem]'/>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 xl:gap-0 justify-between satoshi-400'>
                    <span className='integral text-3xl xl:text-4xl'>{product.name}</span>
                    <div className='satoshi-400 text-lg flex gap-4 items-center'>
                        <Stars key={product.name} stars={product.rating} /> <span>{product.rating}/<span className='text-[#00000099]'>5</span></span>
                    </div>
                    {product.discount === 0 && <div className='satoshi-700 text-2xl 2xl:text-3xl'>
                        ${product.current_price} 
                    </div>}
                    {product.discount !== 0 && <div className='satoshi-700 text-2xl flex gap-2 2xl:text-3xl'>
                        <span>${product.current_price} </span>
                        <span className='text-[#00000060] line-through'>${product.raw_price}</span>
                        <span className='text-[#F33] bg-[#FF333310] inline-block flex items-center px-2 rounded-xl satoshi-400 text-sm'>
                            -{product.discount}%
                        </span>
                    </div>}
                    <div className='text-[#00000060]'>
                        {product.description}
                    </div>
                    <hr />
                    <span className='text-[#00000070] satoshi-400 text-lg'>Select Colors</span>
                    <div className='flex gap-3'>
                        <div className='rounded-full h-10 w-10' style={{backgroundColor: product.color_0}}></div>
                        <div className='rounded-full h-10 w-10' style={{backgroundColor: product.color_1}}></div>
                        <div className='rounded-full h-10 w-10' style={{backgroundColor: product.color_2}}></div>
                    </div>
                    <hr />
                    <span className='text-[#00000070] satoshi-400 text-lg'>Choose Size</span>
                    <div className='flex justify-between satoshi-400 items-center gap-4 h-14 w-full xl:w-96'>
                        <div className=' bg-[#F0F0F0] h-full flex-1 flex justify-center items-center text-[#00000060] rounded-[3.875rem] cursor-default'>{product.sizes[0]}</div>
                        <div className=' bg-[#F0F0F0] h-full flex-1 flex justify-center items-center text-[#00000060] rounded-[3.875rem] cursor-default'>{product.sizes[1]}</div>
                        <div className=' bg-darkblack h-full flex-1 flex justify-center items-center text-basewhite rounded-[3.875rem] cursor-default'>{product.sizes[2]}</div>
                        <div className=' bg-[#F0F0F0] h-full flex-1 flex justify-center items-center text-[#00000060] rounded-[3.875rem] cursor-default'>{product.sizes[3]}</div>
                    </div>
                    <hr />
                    <div className='flex gap-4 xl:gap-8'>
                        <div className='bg-[#F0F0F0] rounded-[3.875rem] flex xl:gap-14 gap-6 items-center py-[1rem] px-[1.25rem] text-xl'>
                            <img src={minus.src} alt="minus" className='w-4 h-4 cursor-pointer' onClick={() => console.log("minus")}/> <span className='cursor-default'>1</span> <img src={plus.src} alt="plus" className='w-4 h-4 cursor-pointer' onClick={console.log("plus")}/>
                        </div>                        
                        <div className='bg-darkblack text-basewhite flex items-center justify-center rounded-[3.875rem] flex-1 text-xl satoshi-500'>
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between xl:text-2xl text-[#00000060] border-b border-[#00000060]'>
                <div className='flex-1 flex justify-center items-center py-2 xl:py-6'>
                    Product Details
                </div>
                <div className='flex-1 flex justify-center items-center text-darkblack border-b border-darkblack py-2 xl:py-6'>
                    Rating & Reviews
                </div>
                <div className='flex-1 flex justify-center items-center py-2 xl:py-6'>
                    FAQs
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='satoshi-700 text-2xl xl:text-3xl'>
                    <span>All Reviews </span>
                    <span className='text-[#00000060] text-lg'> (456)</span>
                </div>
                <div className='flex items-center gap-1 xl:gap-4 satoshi-500 xl:text-xl'>
                    <div className='rounded-full xl:py-[1rem] xl:px-[1.25rem] py-[0.6rem] px-[0.6rem] bg-[#F0F0F0]'>
                        <img src={filters.src} alt="filters" className='w-7 h-7'/>
                    </div>
                    <div className='hidden xl:block rounded-[3.875rem] py-[1rem] px-[1.25rem] bg-[#F0F0F0]'>
                        <span>Latest </span>
                        <img src={arrowDown.src} alt="arrowdown" className='inline w-5 h-5'/>
                    </div>
                    <div className='rounded-[3.875rem] xl:py-[1rem] xl:px-[1.25rem] py-[0.6rem] px-[0.6rem] bg-darkblack text-basewhite'>
                        Write a Review
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                    {REVIEWS}
                </div>
                <div className='flex justify-center my-7'>
                    <Link href='/newarrivals' className='2xl:text-2xl w-full xl:w-fit text-center text-xl 2xl:px-20 2xl:py-5 px-12 py-3 border border-[#00000030] rounded-[4rem] satoshi-500 cursor-pointer'>
                        Load More Reviews
                    </Link>
                </div>
            </div>
            <div className='h-fit xl:px-24 p-4'>
                <h1 className='text-darkback integral 2xl:text-[3rem] text-[2.5rem] block text-center 2xl:py-12 py-8'>
                    YOU MIGHT ALSO LIKE
                </h1>
                <div className='w-full overflow-x-scroll overflow-y-hidden xl:overflow-hidden'>
                    <div className='flex gap-16 w-fit xl:w-full xl:gap-4 xl:columns-sm'>
                        {MIGHTLIKE}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default page;

// const productId = params.productId
// useEffect( async () => {
//     try{
//         console.log(productId);
//         const data = await axios.get(`http://localhost:8800/api/products/${productId}`)
//         setProduct(data.data[0])
//     } catch(err) {
//         console.log(err);
//     }
// }, [])
// console.log(product);