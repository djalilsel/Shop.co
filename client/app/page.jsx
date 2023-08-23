
import bg from '../assets/mainbg.png'
import bgphone from '../assets/mainbgphone.png'
import star from '../assets/star.png'

export default function Home() {
   
  return (
    <main className="sm:pt-32 p-4 pt-10 sm:h-[85vh] relative sm:bg-no-repeat sm:bg-cover sm:bg-center" style={{backgroundImage: `url(${bg.src})`}}>
      <div className='sm:w-[40rem] flex flex-col gap-4 sm:gap-8'>
        <h1 className='integral text-5xl sm:text-7xl no-selection'>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE <br />
        </h1>
          <p className='text-[#00000099] text-[17px]'>
          Browse through our diverse range of meticulously crafted garments, 
          designed to bring out your individuality and cater to your sense 
          of style.
        </p>
        <div className='bg-darkblack satoshi-400 rounded-[3.875rem] flex justify-center sm:inline sm:w-fit text-basewhite text-lg py-[1rem] px-[4.5rem] cursor-pointer'>
            Shop Now
        </div>
      </div>
      <div>
        <div className='flex justify-center sm:gap-24 mt-10'>
          <div className='px-8 border-r border-[#00000030]'>
            <div className='satoshi-700 text-[#000] text-4xl sm:text-6xl'>200+</div>
            <div className='satoshi-400 text-[#00000099] text-base sm:text-xl'>International Brands</div> 
          </div>
          <div className='px-8 border-l border-[#00000030]'>
            <div className='satoshi-700 text-[#000] text-4xl sm:text-6xl'>2,000+</div>
            <div className='satoshi-400 text-[#00000099] text-base sm:text-xl'>High-Quality Products</div>
          </div>
        </div>
        <div className='flex justify-center mt-6'>                
          <div>
            <div className='satoshi-700 text-[#000] text-4xl sm:text-6xl'>30,000+</div>
            <div className='satoshi-400 text-[#00000099] text-base sm:text-xl'>Happy Customers</div>
          </div>
        </div>
        <img src={star.src} className='hidden sm:absolute top-32 right-56 w-24 h-24 no-selection'/>
        <img src={star.src} className='hidden sm:absolute top-96 right-[43%] w-20 h-20 no-selection'/>
        <div className='mx-[-1rem]'>
          <img src={bgphone.src} className=' w-full'/>
        </div>
      </div>
    </main>
  )}
