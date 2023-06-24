import React from 'react'
import { deleteIcon } from '../assets'


const CartItem = ({ quantity }) => {
    return (
        <div className='absolute w-[360px] h-[256px] shadow-[0_50px_50px_0px_rgba(0,0,0,0.10)] top-[90px] right-[0px] rounded-[10px] shrink-0 bg-[#fff]'>
            <div className='flex items-center h-[68px] pl-[24px] text-[#1d2025] border-b-2 border-[#f7f8fd]'>
                <span className='text-[15px] font-bold leading-[14px]'>Cart</span>
            </div>
            <div className='h-[188px] flex items-center justify-center'>
                {quantity == 0 ? (
                    <span className='text-[15px] font-bold leading-[11px] tracking-[0.6px] text-[#68707d]'>
                        Your cart has {quantity} item(s)
                    </span>
                ) : (
                    <span className='text-[15px] font-bold leading-[11px] tracking-[0.6px] text-[#68707d]'>
                        Your cart is empty
                    </span>
                )}

            </div>
        </div>
    )
}

export default CartItem