import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase font-bold text-[#00df9a] '>Data analytics dashboard</p>
                    <h1 className='font-bold text-2xl sm:text-3xl py-2 md:text-4xl'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia deleniti illum qui! Optio deleniti sequi magnam in nesciunt nobis dolores dolor mollitia enim. Eaque iure atque accusamus illo ex quas.
                    </p>
                    <button className='bg-black text-[#00df9a] mx-auto rounded-md w-[200px] my-6 py-3 font-medium md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics