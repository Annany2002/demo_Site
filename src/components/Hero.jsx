import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2 uppercase">Growing with data analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with Data.</h1>
                <div className='flex justify-center items-center'>
                    <p className="text-xl sm:text-4xl md:text-5xl font- py-4">Fast, flexible financing for</p>
                    <Typed
                        className="text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4"
                        strings={['BTB', 'BSB', 'SAAS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 px-4 md:px-0'>Monitor your data and analytics to increase reverse revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] text-black mx-auto rounded-md w-[200px] my-6 py-3 font-medium'>Get Started</button>
            </div>
        </div>
    );
}
export default Hero