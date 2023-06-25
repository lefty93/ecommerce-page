import React, { useState } from 'react'
import { cartIcon, deleteIcon, product_1 } from '../assets'
import { product } from '../constants'


const CartItem = ({ cartQuantity }) => {
    const totalPrice = product.price * cartQuantity;
    const subTotal = totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
   
    return (
        <div className='absolute w-[360px] h-[256px] shadow-[0_50px_50px_0px_rgba(0,0,0,0.10)] top-[90px] right-[90px] rounded-[10px] shrink-0 bg-[#fff]'>
            <div className='flex items-center h-[68px] pl-[24px] text-[#1d2025] border-b-2 border-[#f7f8fd]'>
                <span className='text-[15px] font-bold leading-[14px]'>Cart</span>
            </div>
            <div className='h-[188px] flex items-center justify-center'>
                {cartQuantity >= 1 ? (
                    <div className='flex flex-col items-center'>
                        <div className='flex h-[50px] gap-[18px] items-center mb-[26px]'>
                            <img src={product.image} alt="" className='h-[50px] w-[50px] rounded-[4px]' />
                            <div>
                                <h3 className='text-[16px] font-[500]'>{product.name}</h3>
                                <p>${product.price} x {cartQuantity}&nbsp;&nbsp;&nbsp;<span className='font-bold'>{subTotal}</span></p>

                            </div>
                            <img src={deleteIcon} alt="" className='w-[14px] h-[16px]'/>
                        </div>

                        <button className='px-[77px] py-[17px] bg-[#ff7d1a] rounded-[10px] inline-flex justify-center items-center gap-[10px] shadow-[0_8px_10px_0px] shadow-[#FFEDE0] w-[312px] h-[54px]' >
                            <p className='font-bold text-[16px] text-white'>Checkout</p>
                        </button>
                    </div>

                ) : (
                    <span className='text-[15px] font-bold leading-[11px] tracking-[0.6px] text-[#68707d]'>
                        Your cart is empty
                    </span>
                ) }

            </div>
        </div>
    )
}

export default CartItem