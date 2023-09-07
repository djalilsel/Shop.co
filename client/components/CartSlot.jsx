import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { minus, plus } from '../assets';

const CartSlot = ({ main_image, name, size, color, current_price, number_of_units, removeItem, minusUnits, plusUnits }) => {
    
    

    return (
        <div className='h-fit w-full py-4 flex justify-between gap-2'>
            <img src={main_image} alt="product img" className='xl:w-36 xl:h-36 w-24 h-24 rounded-lg'/>
            <div className='w-full flex flex-col justify-between'>
                <div className='w-full flex justify-between items-center'>
                    <span className='xl:text-2xl text-lg satoshi-700'>{name}</span>
                    <FontAwesomeIcon icon={faTrashCan} className='text-[#e65a5a] fa-lg cursor-pointer' onClick={removeItem}/>
                </div>
                <div className='flex flex-col'>
                    <span className='satoshi-500 text-sm xl:text-base'>Size: <span className='text-[#00000080]'>{size}</span> </span>
                    <span className='satoshi-500 text-sm xl:text-base'>Color: <span className='text-[#00000080]'>{color}</span></span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='satoshi-700 text-lg xl:text-3xl'> ${current_price}</div>
                    <div className='bg-[#F0F0F0] rounded-[3.875rem] flex xl:gap-6 gap-2 items-center xl:py-[0.75rem] py-[0.25rem] xl:px-[1.25rem] px-[0.5rem]'>
                        <img src={minus.src} alt="minus" className='w-4 h-4 cursor-pointer' onClick={minusUnits}/> <span className='cursor-default satoshi-500'>{number_of_units}</span> <img src={plus.src} alt="plus" className='w-4 h-4 cursor-pointer' onClick={plusUnits}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSlot;