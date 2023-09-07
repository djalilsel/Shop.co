"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faBars, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import CartSlot from './CartSlot';
import { downarrow } from '../assets';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Nav = () => {

    const router = useRouter()
    const [cart, setCart] = useState(false)
    const [nav, setNav] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [search, setSearch] = useState(false)
    const [profile, setProfile] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const storage = [
            {
                id: 551,
                image_url: 'https://i.pinimg.com/564x/d1/7e/a6/d17ea6f395639cbbf5d2e7fc7874fc99.jpg',
                name: 'T-shirt with Tape Details',
                size: 'Large',
                variant_0_color: 'Brown',
                current_price: 120,
                number_of_units: 1
            },
            {
                id: 553,
                image_url: 'https://i.pinimg.com/736x/31/ee/ae/31eeae6c21238a6f45e965af6f72b8ba.jpg',
                name: 'Checkered Shirt',
                size: 'Small',
                variant_0_color: 'Red',
                current_price: 180,
                number_of_units: 1
            },
            {
                id: 554,
                image_url: 'https://i.pinimg.com/736x/3f/02/b6/3f02b61a0d0eefa90e5dbe5bba4af0dd.jpg',
                name: 'Sleeve Striped T-shirt',
                size: 'X-Large',
                variant_0_color: 'Orange',
                current_price: 130,
                number_of_units: 1
            }
        ]
        localStorage.setItem("cart", JSON.stringify(storage))
        setProducts(JSON.parse(localStorage.cart))
    }, [])

    const removeItem = (index) => {
        let storagee = []
        products.map((product, indexx) => {
            if(index === indexx){
                return;
            }
            storagee.push(product)
        })
        localStorage.cart = JSON.stringify(storagee)
        handleChange()
    }
    const plusUnits = (index) => {
        let storagee = []
        products.map((product, indexx) => {
            let prodi
            if(index === indexx){
                prodi = {...product, number_of_units: product.number_of_units + 1}
            } else {
                prodi = product
            }
            storagee.push(prodi)
        })
        localStorage.cart = JSON.stringify(storagee)
        handleChange()
    }
    const minusUnits = (index) => {
        let storagee = []
        products.map((product, indexx) => {
            let prodi
            if(index === indexx){
                prodi = {...product, number_of_units: product.number_of_units - 1}
                if(product.number_of_units - 1 === 0) return removeItem(index)
            } else {
                prodi = product
            }
            storagee.push(prodi)
        })
        localStorage.cart = JSON.stringify(storagee)
        handleChange()
    }

    const handleChange = () => {
        setProducts(JSON.parse(localStorage.cart))
    }

    const signout = async () => {
        try{
            const data = await axios.post("http://localhost:8800/api/auth/signout", {hello: "hello"}, { withCredentials: true })
            router.push('/signin')
        } catch(err){
            console.log(err);
        }
    }

    const toggleCart = () => {
        setNav(false)
        setSearch(false)
        setProfile(false)
        setCart(!cart)
        if(cart){
            document.body.classList.remove('overflow-y-hidden')
        } else{
            document.body.classList.add('overflow-y-hidden')
        }
    }
    const toggleNav = () => {
        setCart(false)
        setSearch(false)
        setProfile(false)
        setNav(!nav)
        if(nav){
            document.body.classList.remove('overflow-y-hidden')
        } else{
            document.body.classList.add('overflow-y-hidden')
        }
    }
    const toggleSearch = () => {
        setCart(false)
        setNav(false)
        setProfile(false)
        setSearch(!search)
    }
    const toggleProfile = () => {
        setCart(false)
        setNav(false)
        setSearch(false)
        setProfile(!profile)
    }

    const token = typeof document !== "undefined" ? !document.cookie.includes("jwt") : true

    let total = 0

    const PRODUCTS = products.length === 0 ? <div className='satoshi-500 text-lg xl:w-96 w-80'>Cart is empty</div> :
        products.map((product, index) => {
            total = total + (product.current_price * product.number_of_units)
            return <CartSlot 
                key={product.id} 
                main_image={product.image_url}
                name={product.name}
                size={product.size}
                color={product.variant_0_color}
                current_price={product.current_price}
                number_of_units={product.number_of_units}
                removeItem={() => removeItem(index)}
                plusUnits={() => plusUnits(index)}
                minusUnits={() => minusUnits(index)}
                handleChange={handleChange}
            />
        })
    
    return (
        <div className='flex flex-col z-40 sticky top-0 satoshi-500 border-b '>
            {token && 
            <div id='signUp' className='z-40 px-4 sm:px-32 bg-darkblack text-[0.75rem] sm:text-[0.875rem] h-[2.375rem] w-full flex justify-center items-center text-basewhite '>
                <div>Sign up and get 20% off to your first order. <Link className='font-semibold underline underline-offset-2 cursor-default' href='/signup'>Sign Up Now</Link></div>
                <div className='hidden no-selection sm:inline sm:absolute right-32 text-[1rem] cursor-pointer' onClick={() => document.querySelector('#signUp').classList.add('hidden')}>X</div>
            </div>}
            <div className='z-40 h-20 sm:h-24 sm:px-32 px-4 w-full bg-basewhite flex gap-8 items-center boder-2 border-black'>
                {!nav && <div className='lg:hidden' onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} className='fa-lg'/>
                </div>}
                {nav && <div className='lg:hidden' onClick={toggleNav}>
                    <FontAwesomeIcon icon={faXmark} className='fa-xl'/>
                </div>}
                <Link href='/' className='integral sm:text-[2rem] text-2xl no-selection'>
                    SHOP.CO
                </Link>
                <nav className='hidden lg:flex justify-center items-center gap-8 satoshi-400 cursor-default'>
                    <div className='h-[96px] flex items-center' onMouseLeave={() => setDropdown(false)}>
                        <Link href='/products' className='inline-block mr-1'>
                            Shop
                        </Link>
                        <img id='dropdown' src={downarrow.src} onMouseOver={() => setDropdown(true)}  alt="more" className='inline-block w-3 h-3'/>
                    </div>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
                <div className='hidden sm:flex relative flex-1'>
                    <input type="text" placeholder='Search for products...' 
                        className='satoshi no-selection w-full bg-[#F0F0F0] pl-[2.25rem] p-[0.75rem] rounded-[3.875rem]'
                    />
                    <FontAwesomeIcon icon={faSearch} className='text-[#000] absolute top-4 left-2 px-1' />
                </div>
                <div className='flex-1 sm:hidden'></div>
                <div className='flex gap-4 justify-self-end'>
                    <div className='sm:hidden'>
                        <FontAwesomeIcon icon={faSearch} className='text-[#000] fa-lg hidden' onClick={toggleSearch}/>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} className='text-[#000] fa-lg' onClick={toggleCart}/>
                    <FontAwesomeIcon icon={faCircleUser} className='text-[#000] fa-lg' onClick={toggleProfile}/>
                </div>
            </div>
            {cart &&
            <div className='w-screen h-screen bg-[#00000060] absolute top-0 right-0 z-30' onClick={toggleCart} style={{top: token ? '136px' : '96px'}}></div>}
            {cart &&
            <div className='xl:block border border-[#00000060] bg-basewhite absolute top-[118px] right-0 xl:right-28 xl:top-[134px] px-12 py-8 z-40' style={{top: token ? '136px' : '96px'}}>
                <div className='satoshi-700 text-2xl mb-1'>
                    Your Cart
                </div>
                <hr className='bg-[#00000060] h-[1.5px]'/>
                <div className='flex flex-col mt-6 mb-3 gap-2'>
                   {PRODUCTS}
                </div>
                <hr className='bg-[#00000060] h-[1.5px]'/>
                <div className='satoshi-700 my-3 text-right'>
                    Total: ${total}
                </div>
                <div className='flex gap-4 w-full satoshi-700'>
                    <Link href='/home/cart' className='text-basewhite bg-darkblack flex-1 text-center border border-darkblack py-3 px-6' onClick={() => setCart(false)}>
                        View cart
                    </Link>
                    <Link href='/checkout' className='flex-1 text-center border border-darkblack py-3 px-6' onClick={() => setCart(false)}>
                        Checkout
                    </Link>
                </div>
            </div>}
            {nav &&
            <div className='w-screen h-screen bg-[#00000060] absolute top-0 right-0 z-30' onClick={toggleNav}></div>}
            {nav &&
            <div className='xl:block border border-[#00000060] bg-basewhite absolute top-[118px] left-0 xl:right-28 xl:top-[134px] px-12 py-8 z-40'>
                <nav className='flex flex-col gap-3 satoshi-500 cursor-default text-lg'>
                    <Link href='/products'>
                        Shop
                    </Link>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
            </div>}
            {dropdown &&
            <div className='border-b w-full text-[#00000060] border-[#00000060] bg-basewhite absolute top-[118px] left-0 xl:right-28 xl:top-[134px] px-64 py-8 z-40 flex gap-36 justify-center' style={{top: token ? '136px' : '96px'}} onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <nav className='flex flex-col gap-3 satoshi-500 cursor-default text-lg'>
                    <span className='satoshi-700 text-[#000000]'>New & Featured</span>
                    <Link href='/products'>
                        Shop
                    </Link>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
                <nav className='flex flex-col gap-3 satoshi-500 cursor-default text-lg'>
                    <span className='satoshi-700 text-[#000000]'>Men</span>
                    <Link href='/products'>
                        Shop
                    </Link>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
                <nav className='flex flex-col gap-3 satoshi-500 cursor-default text-lg'>
                    <span className='satoshi-700 text-[#000000]'>Women</span>
                    <Link href='/products'>
                        Shop
                    </Link>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
                <nav className='flex flex-col gap-3 satoshi-500 cursor-default text-lg'>
                    <span className='satoshi-700 text-[#000000]'>Kids</span>
                    <Link href='/products'>
                        Shop
                    </Link>
                    <Link href='/onsale'>
                        On Sale
                    </Link>
                    <Link href='/newarivals'>
                        New Arrivals
                    </Link>
                    <Link href='/brands'>
                        Brands
                    </Link>
                </nav>
                
            </div>}
            {search &&
            <div className='absolute top-[118px] left-0 z-40 h-20 sm:h-24 sm:px-32 px-4 w-full bg-basewhite flex gap-8 items-center boder-2 border-black'>
                <div className='flex relative w-full'>
                    <input type="text" placeholder='Search for products...' 
                        className='satoshi no-selection w-full bg-[#F0F0F0] pl-[2.25rem] p-[0.75rem] rounded-[3.875rem]'
                    />
                    <FontAwesomeIcon icon={faSearch} className='text-[#000] absolute top-4 left-2 px-1' />
                </div>
            </div>}
            {profile &&
            <div className='border border-[#00000060] bg-basewhite absolute top-[118px] right-0 xl:right-28 xl:top-[134px] px-12 py-8 z-40' style={{top: token ? '136px' : '96px'}}>
                <div className='w-80 xl:w-96 flex gap-6 items-center'>
                    <FontAwesomeIcon icon={faCircleUser} className='fa-3x'/>
                    <div className='flex flex-col justify-between text-lg flex-1'>
                        <span className='satoshi-700'>
                            Djalil Mr.User
                        </span>
                        <span className='satoshi-400 text-[#00000060]'>
                            Custromer
                        </span>
                    </div>
                    <span className='cursor-default satoshi-700 text-lg' onClick={signout}>Signout</span>
                </div>
                <hr className='bg-[#00000060] h-[1.5px] my-4'/>
                <div className='flex gap-4 w-full satoshi-700'>
                    <Link href='/profile' className='flex-1 text-center border border-darkblack py-3 px-6' onClick={() => setCart(false)}>
                        View Profile
                    </Link>
                </div>
            </div>}
        </div>
    );
};



export default Nav;