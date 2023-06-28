import React, { useState } from 'react'
import { minusIcon, plusIcon, cartIcon } from "../assets"
import { product } from '../constants';
import CartItem from './CartItem';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const [showCart, setShowCart] = useState(false)

  const [cartQuantity, setCartQuantity] = useState(null)
  const addToCart = () => {
    setCartQuantity(quantity);
    setShowCart(true);
  }

  return (
    <div className='mt-[152px]'>
      <div className='w-[424px] h-[337px] '>
        <span className='text-[14px] font-bold tracking-widest text-[#ff7d1a]'>SNEAKER COMPANY</span>
        <h1 className='font-bold text-[44px] leading-[44px] mt-[19px] mb-[35px] w-[396px] h-[96px]'>{product.name}</h1>
        <p className='font-medium text-[16px] leading-7 text-[#68707d]'>{product.description}</p>
        <div className='mt-[30px] flex-col'>
          <div className='flex gap-[16px] mb-[10px]'>
            <h2 className='text-[30px] font-bold leading-[26px]'>${product.price}</h2>
            <div className='w-[51px] h-[27px] rounded-[5px] bg-[#ffede0] flex items-center justify-center'>
              <p className='text-[16px] font-bold text-[#ff7d1a] leading-[26px]'>50%</p>
            </div>
          </div>
          <div className='font-bold text-[16px] leading-[26px] tracking-[0.48px] line-through'>
            $250.00
          </div>
        </div>
      </div>

      <div className='gap-[16px] flex mt-[34px]'>
        <div className='w-[157px] h-55px] py-[10px] px-[16px] rounded-[10px] bg-[#f7f8fd]'>
          <div className='flex w-[127px] h-[35px] items-center justify-between'>
            <button><img src={minusIcon} alt="" onClick={decrementQuantity} /></button>
            <p className='text-[16px] font-bold tracking-[1.28px]'>{quantity}</p>
            <button><img src={plusIcon} alt="" onClick={incrementQuantity} /></button>
          </div>
        </div>

        <button className='px-[77px] py-[17px] bg-[#ff7d1a] rounded-[10px] inline-flex justify-center items-center gap-[10px] shadow-[0_8px_10px_0px] shadow-[#FFEDE0] w-[274px] h-[54px]' onClick={addToCart}>

          <img src={cartIcon} alt="" className='h-[17px] w-[16px]' />
          <p className='font-bold text-[16px] text-white'>Add to cart</p>
        </button>
        {showCart && cartQuantity >= 1 ? (
          <CartItem
            cartQuantity={cartQuantity}
          />
        ) : null}
      </div>

    </div>
  )
}

export default Detail

// TODO Add functionality to add item to the cart.