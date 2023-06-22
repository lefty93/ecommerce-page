import React from 'react'
import { minusIcon, plusIcon, cartIcon } from "../assets"

const Detail = () => {
  return (
    <div className='mt-[152px]'>
      <div className='w-[424px] h-[337px] '>
        <span className='text-[14px] font-bold tracking-widest text-[#ff7d1a]'>SNEAKER COMPANY</span>
        <h1 className='font-bold text-[44px] leading-[44px] mt-[19px] mb-[35px] w-[396px] h-[96px]'>Fall Limited Edition Sneakers</h1>
        <p className='font-medium text-[16px] leading-7 text-[#68707d]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='mt-[30px] flex-col'>
          <div className='flex gap-[16px] mb-[10px]'>
            <h2 className='text-[30px] font-bold leading-[26px]'>$125.00</h2>
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
            <button><img src={minusIcon} alt="" /></button>
            <p className='text-[16px] font-bold tracking-[1.28px]'>0</p>
            <button><img src={plusIcon} alt="" /></button>
          </div>
        </div>

        <button className='px-[77px] py-[17px] bg-[#ff7d1a] rounded-[10px] inline-flex justify-center items-center gap-[10px] shadow-[0_8px_10px_0px] shadow-[#FFEDE0] w-[274px] h-[54px]'>

          <img src={cartIcon} alt="" className='h-[17px] w-[16px]' />
          <p className='font-bold text-[16px] text-white'>Add to cart</p>

        </button>

      </div>

    </div>
  )
}

export default Detail