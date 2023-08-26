import {
    casual,
    formal,
    party,
    gym
} from '../assets'

const BrowseStyles = () => {
    return (
        <div className='h-screen p-4 xl:p-16 xl:pb-12'>
            <div className='w-full h-full bg-[#F0F0F0] text-[#000000] text-center xl:px-16 px-8 flex flex-col'>
                <h1 className='integral xl:text-6xl xl:py-12 p-6 text-3xl'>BROWSE BY <br className='xl:hidden' />DRESS STYLE</h1>
                <div className='xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-10 xl:gap-y-4 flex flex-col gap-4 satoshi-700 text-2xl xl:text-5xl'>
                    <div className='bg-[url("/_next/static/media/casual.93a46d94.png")] bg-no-repeat bg-center bg-cover xl:h-96 h-44 overflow-hidden rounded-2xl relative'><span className='absolute left-8 top-10'>Casual</span></div>
                    <div className='col-span-2 bg-[url("/_next/static/media/formal.3b9315b7.png")] bg-no-repeat bg-center bg-cover xl:h-96 h-44 overflow-hidden rounded-2xl relative'><span className='absolute left-8 top-10'>Formal</span></div>
                    <div className='col-span-2 bg-[url("/_next/static/media/party.be92759e.png")] bg-no-repeat bg-center bg-cover xl:h-96 h-44 overflow-hidden rounded-2xl relative'><span className='absolute left-8 top-10'>Party</span></div>
                    <div className='bg-[url("/_next/static/media/gym.77394e9c.png")] bg-no-repeat bg-center bg-cover xl:h-96 h-44 overflow-hidden rounded-2xl relative'><span className='absolute left-8 top-10'>Gym</span></div>
                </div>
            </div>
        </div>
    );
};

export default BrowseStyles;