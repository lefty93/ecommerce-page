import { useState } from 'react'
import { navLinks } from '../constants'
import { menuIcon, logo, cartIcon, imageAvatar } from '../assets'




const Navbar = () => {
    return (
        <nav className='w-full h-[112px] bg-white flex py-4 items-center border-b border-[#f7f8fd]' >
           
                <img src={menuIcon} alt="" className='w-[16px] h-[15px] pt-1 ml-[24px] mr-[16px] md:hidden' />
                <img src={logo} alt="" className='md:mr-10 mr-[91px]' />
           
            <ul className='md:flex gap-14 flex-1 hidden'>
                {navLinks.map((link) => (
                    <li key={link.id} className='text-[#68707d] text-[15px] '>
                        <a href="">{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className='flex md:gap-[45px] gap-[22px] items-center'>
                <img src={cartIcon} alt="" className='md:w-[22px] md:h-5 w-[21px] h-[19px]' />
                <img src={imageAvatar} alt="" className='md:w-[50px] md:h-[50px] w-[24px] h-[24px] border-[1px] rounded-full border-[#ff7d1a]' />
            </div>
        </nav>
    )
}

export default Navbar

// TODO Add hover effect to cart icon. 