import { useState } from 'react'
import Navbar from '../components/Navbar';
import Detail from '../components/Detail';
import Product from '../components/Product';

const Home = () => {
    const [cartQuantity, setCartQuantity] = useState(0);
    return (
        <div className='w-screen h-screen md:px-10'>
            <Navbar cartQuantity={cartQuantity} />
            <div className='md:grid md:grid-cols-2 flex flex-col justify-center'>
                <div className="flex justify-center md:mr-[63px]">
                    <Product />
                </div>
                <Detail />
            </div>
        </div>
    )
}

export default Home