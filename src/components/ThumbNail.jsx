import React from 'react'
import { thumbNail } from '../constants'

const ThumbNail = () => {
    return (
        <div className='flex flex-row justify-between'>
            {thumbNail.map((thumb, index) => (
                <img src={thumb.image} alt="" className=' h-[50%] w-[20%] rounded-2xl' />
            ))}
        </div>
    )
}

export default ThumbNail