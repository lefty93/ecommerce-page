import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Detail from '../components/Detail';
import Product from '../components/Product';

const Home = () => {
    const [cartQuantity, setCartQuantity] = useState(0);
  return (
      <div className='w-screen h-screen px-10'>
          <Navbar cartQuantity={cartQuantity} />
          <div className='grid grid-cols-2'>
              <div className="flex justify-center mr-[63px]">
                  <Product />
              </div>
              <Detail />
          </div>
      </div>
  )
}

export default Home