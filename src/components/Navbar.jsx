import React, { useState } from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets'
import { cartIcon } from '../assets'
import { imageAvatar } from '../assets';



const Navbar = () => {
    return (
        <nav className='w-full h-[112px] shrink-0 bg-white flex py-4 items-center border-b border-[#f7f8fd]' >
            <img src={logo} alt="" className='mr-10' />
            <ul className='flex gap-14 flex-1'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className='text-[#68707d] text-[15px] '>
                        <a href="">{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className='flex gap-[45px] items-center relative'>
                <img src={cartIcon} alt="" className='w-[22px] h-5' />
                <img src={imageAvatar} alt="" className='w-[50px] h-[50px] border-[1px] rounded-full border-[#ff7d1a]' />
            </div>
        </nav>
    )
}

export default Navbar

// TODO Add hover effect to cart icon. 