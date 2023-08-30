import Link from 'next/link';
import Stars from './Stars'

const ProductCard = ({ id, name, image_url, stars, current_price, discount}) => {
    name = name.split(' ')
    if(stars - Math.round(stars) !== -0.5){
        stars = Math.round(stars)
    }
    return (
        <div className='rounded-lg h-[400px] xl:h-[400px] w-64 2xl:w-96 2xl:h-[600px] cursor-pointer'>
            <Link href={`/product/${id}`}>
                <div className='2xl:h-96 h-64 '>
                    <img src={image_url} className='w-full h-full rounded-3xl' />
                </div>
            </Link>
            <div className='h-48 2xl:h-64 py-3 flex flex-col gap-1'>
                <Link href={`/product/${id}`}>
                    <h2 className='satoshi-700 text-xl 2xl:text-2xl'>{name.map((word, index) => index < 4 ? (`${word} `) : null)}</h2>
                </Link>
                <div className='satoshi-400 xl:text-lg flex gap-4 items-center'>
                    <Stars key={name} stars={stars} /> <span>{stars}/<span className='text-[#00000099]'>5</span></span>
                </div>
                {discount === 0 && <div className='satoshi-700 text-2xl 2xl:text-3xl'>
                    ${current_price} 
                </div>}
                {discount !== 0 && <div className='satoshi-700 text-2xl flex gap-2 2xl:text-3xl'>
                    <span>${current_price} </span>
                    <span className='text-[#00000060] line-through'>${ Math.floor(current_price / (1 - (discount / 100)))}</span>
                    <span className='text-[#F33] bg-[#FF333310] inline-block flex items-center px-2 rounded-xl satoshi-400 text-sm'>
                        -{discount}%
                    </span>
                </div>}
            </div>
        </div>
    );
};

export default ProductCard;