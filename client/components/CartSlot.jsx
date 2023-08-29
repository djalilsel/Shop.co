import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { minus, plus } from '../assets';

const CartSlot = ({ image, name, size, color, price, numberOfUnits }) => {
    return (
        <div className='h-24 xl:w-96 w-80 py-4 flex justify-between'>
            <div className='flex gap-2'>
                <img src={image} alt="product img" className='w-16 h-16'/>
                <div className='flex flex-col text-sm'>
                    <span className='text-base satoshi-700'>{name}</span>
                    <span className='satoshi-500'>Size: <span className='text-[#00000080]'>{size}</span> <span className='satoshi-500'> ${price}</span></span>
                    <span className='satoshi-500'>Color: <span className='text-[#00000080]'>{color}</span></span>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <FontAwesomeIcon icon={faTrashCan} className='text-[#e65a5a] cursor-pointer' />
                <div className='bg-[#F0F0F0] rounded-[3.875rem] flex gap-3 items-center py-[0.25rem] px-[0.75rem]'>
                    <img src={minus.src} alt="minus" className='w-4 h-4 cursor-pointer'/> <span className='cursor-default'>{numberOfUnits}</span> <img src={plus.src} alt="plus" className='w-4 h-4 cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default CartSlot;