import React from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets'
import { cartIcon } from '../assets'
import { imageAvatar } from '../assets';



const Navbar = () => {
    return (
        <nav className='w-full bg-white flex py-4 items-center border-b' >
            <img src={logo} alt="" className='mr-10' />
            <ul className='flex gap-14 flex-1'>
                {navLinks.map((link, index) => (
                    <li key={link.id}>
                        <a href="">{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className='flex gap-14 items-center'>
                <img src={cartIcon} alt="" className='h-7' />
                <img src={imageAvatar} alt="" className=' h-14' />
            </div>
        </nav>
    )
}

export default Navbar