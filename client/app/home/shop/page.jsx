'use client'
import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { filters, inArrow, priceSlider } from '../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faAngleUp, faArrowLeft, faArrowRight, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../../../components/ProductCard';

const page = () => {

    const products = [
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
          },
          {
            id: 555,
            name: "Vertical Striped Shirt",
            current_price: 212.00,
            raw_price: 232,
            discount: 20,
            main_image: "https://i.pinimg.com/564x/b0/b0/ec/b0b0ecd81c4e123ad3dec2b8d48abddb.jpg",
            stars: 5,
          },
    ]
    let filter = false
    const toggleFilters = () => {
        if(typeof document !== "undefined"){
            if(filter){
                document.querySelector(".filters").classList.add("hidden")
                document.querySelector("#filters").classList.add("hidden")
                document.body.classList.remove("overflow-hidden")
            } else{
                document.querySelector(".filters").classList.remove("hidden")
                document.querySelector("#filters").classList.remove("hidden")
                document.body.classList.add("overflow-hidden")
            }
            filter = !filter
        }
    }

    let url = usePathname().split("/")
    url = url.map(word => (word.toUpperCase()[0] + word.slice(1)))

    const URL = url.map((word, index) => {
        if(index !== 0){
            if(index === (url.length - 1)){
                return <div className='text-[#000]'><FontAwesomeIcon icon={faAngleRight} className='inline'/> {word}</div>
            } else if(index !== 1){
                return <div className=''><FontAwesomeIcon icon={faAngleRight} className='inline'/> {word}</div>
            } else{
                return <div>{word}</div>
            }
        }
    })

    const PRODUCTS = products.map(product => {
        return (<div className='flex'>
            <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image_url={product.main_image}
                  stars={product.stars}
                  current_price={product.current_price}
                  raw_price={product.raw_price}
                  discount={product.discount}
                />
            </div>)
      })

    return (
        <div className='xl:px-24 px-4 py-9'>
            <div className='flex gap-2 satoshi-400 text-[#00000060]'>{URL}</div>
            <div className='filters absolute hidden xl:hidden w-screen h-screen bg-[#00000060] top-0 right-0 z-40' onClick={toggleFilters}></div>
            <div className='flex gap-6 w-full h-fit py-9 '>
                <div id='filters' className='absolute hidden overflow-y-scroll xl:overflow-auto bg-basewhite top-0 left-0 w-screen h-fit xl:relative flex-[2] xl:h-fit xl:flex flex-col xl:gap-6 border border-[#00000030] px-[1.25rem] py-[1.5rem] rounded-[1.25rem] z-40'>
                    <div className='flex justify-between items-center'>
                        <span className='satoshi-700 '>Filters</span>
                        <img src={filters.src} alt="filters" className='hidden xl:block w-6 h-6'/>
                        <FontAwesomeIcon icon={faXmark} className='text-darkblack block xl:hidden fa-lg' onClick={toggleFilters} />
                    </div>
                    <hr className='my-1 xl:my-0'/>
                    <div className='flex flex-col gap-1 satoshi-400'>
                        <div className='flex justify-between items-center text-[#00000060]'>
                            <span>T-shirts</span>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                        <div className='flex justify-between items-center text-[#00000060]'>
                            <span>Shorts</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className='flex justify-between items-center text-[#00000060]'>
                            <span>Shirts</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className='flex justify-between items-center text-[#00000060]'>
                            <span>Hoodies</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className='flex justify-between items-center text-[#00000060]'>
                            <span>Jeans</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <hr className='my-1 xl:my-0'/>
                    <div className='flex flex-col xl:gap-6 gap-2'>
                        <div className='flex justify-between items-center'>
                            <span className='satoshi-700 text-lg xl:text-2xl'>Price</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <div>
                            <img src={priceSlider.src} alt="priceSlider" className='w-full'/>
                        </div>
                    </div>
                    <hr className='my-1 xl:my-0'/>
                    <div className='flex flex-col xl:gap-6 gap-2'>
                        <div className='flex justify-between items-center'>
                            <span className='satoshi-700 text-lg xl:text-2xl'>Colors</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <div className='xl:grid xl:grid-cols-5 xl:gap-6 gap-2'>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#00C12B] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#F50606] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#F5DD06] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#F57906] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#06CAF5] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#063AF5] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#7D06F5] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#F506A4] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#FFF] inline-block mx-2 xl:mx-0'></div>
                            <div className='w-10 h-10 rounded-full border border-[#00000030] bg-[#000] inline-block mx-2 xl:mx-0'></div>
                        </div>
                    </div>
                    <hr className='my-1 xl:my-0'/>
                    <div>
                        <div className='flex justify-between items-center'>
                            <span className='satoshi-700 text-lg xl:text-2xl'>Sizes</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <div className='satoshi-400'>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>XX-Small</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>X-Small</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>Small</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>Medium</div>
                            <div className=' bg-darkblack py-[0.625rem] px-[1.25rem] w-fit text-basewhite rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>Large</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>X-Large</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>XX-Large</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>3X-Large</div>
                            <div className=' bg-[#F0F0F0] py-[0.625rem] px-[1.25rem] w-fit text-[#00000060] rounded-[3.875rem] cursor-default inline-block xl:mx-2 xl:my-2 mx-1 my-1'>4X-Large</div>

                        </div>
                    </div>
                    <hr className='my-1 xl:my-0'/>
                    <div className='flex flex-col xl:gap-6 gap-2'>
                        <div className='flex justify-between items-center'>
                            <span className='satoshi-700 text-lg xl:text-2xl'>Dress Style</span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <div className='flex flex-col gap-2 satoshi-400'>
                            <div className='flex justify-between items-center text-[#00000060]'>
                                <span>Casual</span>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </div>
                            <div className='flex justify-between items-center text-[#00000060]'>
                                <span>Formal</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className='flex justify-between items-center text-[#00000060]'>
                                <span>Party</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className='flex justify-between items-center text-[#00000060]'>
                                <span>Gym</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className='bg-darkblack text-basewhite py-[1rem] px-[3.375rem] rounded-[3.875rem] xl:mt-4 w-full text-center text-lg satoshi-500'>
                                Apply Filter
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-screen xl:flex-[8] flex flex-col gap-7'>
                    <div className='flex justify-between items-center satoshi-400'>
                        <span className='satoshi-700 text-4xl'>Colors</span>
                        <div className='hidden xl:flex items-center justify-end gap-2'>                           
                            <span className='text-[#00000060]'>Showing 1-10 of 100 Products</span>
                            <span className=' text-[#00000060]'>Sort by: <span className='text-darkblack satoshi-500'> Most Popular</span></span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <img src={filters.src} onClick={toggleFilters} className='xl:hidden block'/>
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-3 gap-10 w-full justify-center'>
                        {PRODUCTS}
                    </div>
                    <hr />
                    <div className='satoshi-500 flex justify-between'>
                        <div className='border items-center rounded-[0.5rem] font-bold py-[0.5rem] px-[0.875rem] text-sm xl:text-base w-fit flex gap-4'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Previous
                        </div>
                        <div className='flex gap-1 xl:gap-4 items-end'>
                            <div className='bg-[#0000000f] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base  rounded-md cursor-default'>1</div>
                            <div className='text-[#00000060] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base rounded-md cursor-default'>2</div>
                            <div className='text-[#00000060] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base rounded-md cursor-default hidden xl:block'>3</div>
                            <FontAwesomeIcon icon={faEllipsis} className='text-[#00000060] mb-2'/>
                            <div className='text-[#00000060] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base rounded-md cursor-default hidden xl:block'>8</div>
                            <div className='text-[#00000060] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base rounded-md cursor-default'>9</div>
                            <div className='text-[#00000060] py-[0.5rem] xl:px-[0.875rem] px-[0.5rem] text-xs xl:text-base rounded-md cursor-default'>10</div>
                        </div>
                        
                        <div className='border items-center rounded-[0.5rem] font-bold py-[0.5rem] px-[0.875rem] text-sm xl:text-base  w-fit flex gap-4'>
                            Next
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;