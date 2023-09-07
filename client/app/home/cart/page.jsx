'use client'
import { faAngleRight, faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import React from 'react';
import CartSlot from '../../../components/CartSlot';

const page = () => {

    const cartProducts = [
        {
            id: 333,
            name: "Gradient Graphic T-shirt",
            main_image: "https://i.pinimg.com/564x/66/c0/44/66c04479b6275203b1c20cb824ccff65.jpg",
            size: "Large",
            color: "White",
            number_of_units: 1,
            current_price: 145,
        },
        {
            id: 553,
            name: "Checkered Shirt",
            main_image: "https://i.pinimg.com/736x/31/ee/ae/31eeae6c21238a6f45e965af6f72b8ba.jpg",
            size: "Medium",
            color: "Red",
            number_of_units: 1,
            current_price: 180.00,
        },
        {
            id: 552,
            name: "Skinny Fit Jeans",
            main_image: "https://i.pinimg.com/564x/74/24/c8/7424c8917fe975182d00b80ed8788d68.jpg",
            size: "Large",
            color: "Blue",
            number_of_units: 1,
            current_price: 240.00,
        },
    ]
    
    let url = usePathname().split("/")
    url = url.map(word => (word.toUpperCase()[0] + word.slice(1)))
    const URL = url.map((word, index) => {
        if(index !== 0){
            if(index === (url.length - 1)){
                return <div className='text-[#000]'><FontAwesomeIcon icon={faAngleRight} className='inline'/> {word}</div>
            } else if(index !== 1){
                return <div><FontAwesomeIcon icon={faAngleRight} className='inline'/> {word}</div>
            } else{
                return <div>{word}</div>
            }
        }
    })

    const CART = cartProducts.map((product, index) => {
        if(index === cartProducts.length - 1){
            return <CartSlot 
                        key={product.id} 
                        name={product.name} 
                        main_image={product.main_image} 
                        size={product.size} color={product.color} 
                        number_of_units={product.number_of_units}
                        current_price={product.current_price} 
                    />
        }
        return <div className='w-full'>
                    <CartSlot 
                        key={product.id} 
                        name={product.name} 
                        main_image={product.main_image} 
                        size={product.size} color={product.color} 
                        number_of_units={product.number_of_units}
                        current_price={product.current_price} 
                    /> 
                    <hr className='my-4'/>
                </div>
    })
    

    return (
        <div className='px-4 xl:px-24 py-9'>
            <div className='flex gap-2 satoshi-400 text-[#00000060]'>{URL}</div>
            <div className='integral text-4xl my-5'>
                YOUR CART
            </div>
            <div className='flex flex-col xl:flex-row gap-5'>
                <div className='w-full flex-1 flex flex-col rounded-[1.25rem] py-[1.25rem] px-[1.5rem] border'>
                    {CART}
                </div>
                <div className='flex-1 h-fit flex flex-col gap-6 rounded-[1.25rem] py-[1.25rem] px-[1.5rem] border'>
                    <div className='satoshi-700 text-3xl'>
                        Order Summary
                    </div>
                    <div className='flex flex-col gap-4 satoshi-400 text-lg'>
                        <div className='flex justify-between'>
                            <span className='text-[#00000060]'>
                                Subtotal
                            </span>
                            <span className='satoshi-700'>
                                $1
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-[#00000060]'>
                                Discount(%)
                            </span>
                            <span className='text-[#F33] satoshi-700'>
                                -$1
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-[#00000060]'>
                                Delivery Fee
                            </span>
                            <span className='satoshi-700'>
                                $1
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between text-2xl'>
                        <span className='satoshi-400'>
                            Total
                        </span>
                        <span className='satoshi-700'>
                            $1
                        </span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='relative flex-1'>
                            <input className='bg-[#F0F0F0] pl-10 p-4 rounded-[3.875rem] w-full' placeholder='Add Promo Code'/>
                            <FontAwesomeIcon icon={faTag} className='text-darkblack absolute left-4 top-5'/>
                        </div>
                        <div className='bg-darkblack text-basewhite rounded-[3.875rem] py-4 px-[2rem] xl:px-[3.375rem]'>
                            Apply
                        </div>
                    </div>
                    <div className='bg-darkblack text-basewhite satoshi-500 py-[1rem] px-[3.375rem] rounded-[3.875rem] text-center'>
                        <span>
                            Go to Checkout 
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} className='ml-2'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;