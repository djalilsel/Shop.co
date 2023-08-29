
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/Topselling'
import BrowseStyles from '../components/BrowseStyles'
import HappyRev from '../components/HappyRev'
import bg from '../assets/mainbg.png'
import {
  star,
  bgphone,
  calvin,
  gucci,
  prada,
  versace,
  zara
} from '../assets'

export default function Home() {

  
  return (
      <main>
      {/* Hero */}
      <div className="2xl:pt-32 lg:p-20 px-4 pt-10 lg:h-[100vh] 2xl:h-[85vh] lg:bg-[url('/_next/static/media/mainbg.28b8a9ca.png')] relative lg:bg-no-repeat lg:bg-cover lg:bg-center flex flex-col">
        <div className='w-full lg:w-[40rem] flex flex-col gap-4 lg:gap-8'>
          <h1 className='integral text-5xl lg:text-7xl no-selection'>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE <br />
          </h1>
            <p className='text-[#00000099] text-[17px]'>
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense 
            of style.
          </p>
          <div className='bg-darkblack satoshi-400 rounded-[3.875rem] flex justify-center lg:inline lg:w-fit text-basewhite text-lg py-[1rem] px-[4.5rem] cursor-pointer'>
              Shop Now
          </div>
        </div>
        <div>
          <div className='flex justify-center lg:justify-start lg:gap-8 2xl:gap-24 mt-10'>
            <div className='px-8 lg:px-0 border-r border-[#00000030] lg:border-none'>
              <div className='satoshi-700 text-[#000] text-4xl 2xl:text-6xl'>200+</div>
              <div className='satoshi-400 text-[#00000099] text-base 2xl:text-xl'>International Brands</div> 
            </div>
            <div className='px-8 border-l border-[#00000030] lg:border-none'>
              <div className='satoshi-700 text-[#000] text-4xl 2xl:text-6xl'>2,000+</div>
              <div className='satoshi-400 text-[#00000099] text-base 2xl:text-xl'>High-Quality Products</div>
            </div>
            <div className='px-8 lg:border-none hidden lg:inline'>
              <div className='satoshi-700 text-[#000] text-4xl 2xl:text-6xl'>30,000+</div>
              <div className='satoshi-400 text-[#00000099] text-base 2xl:text-xl'>Happy Customers</div>
            </div>
          </div>
          <div className='flex justify-center mt-6'>                
            <div className='lg:hidden'>
              <div className='satoshi-700 text-[#000] text-4xl'>30,000+</div>
              <div className='satoshi-400 text-[#00000099] text-base'>Happy Customers</div>
            </div>
          </div>
          <img src={star.src} className='hidden lg:flex absolute top-32 2xl:right-56 lg:right-32 right-64 w-24 h-24 no-selection'/>
          <img src={star.src} className='hidden lg:flex absolute top-96 2xl:right-[43%] lg:right-[44%] right-1/3 w-20 h-20 no-selection'/>
          <div className='mx-[-1rem] lg:hidden'>
            <img src={bgphone.src} className=' w-full'/>
          </div>
        </div>
      </div>
      {/* brands */}
      <div className='bg-darkblack flex flex-wrap justify-around py-8 gap-4 items-center h-40'>
        <img src={versace.src} className='h-6 '/>
        <img src={zara.src} className='h-6 '/>
        <img src={gucci.src} className='h-6 '/>
        <img src={prada.src} className='h-6 '/>
        <img src={calvin.src} className='h-6 '/>
      </div>
      <NewArrivals />
      <TopSelling />
      <BrowseStyles />
      <HappyRev />
    </main>
    
  )}
