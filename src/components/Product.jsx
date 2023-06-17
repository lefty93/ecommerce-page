import React from 'react'
import ThumbNail from './ThumbNail'
import { product_1, thumbNail_1 } from '../assets'

const Product = () => {
  return (
      <div className='p-14 flex flex-col'>
          <img src={product_1} alt="" className='h-full w-full rounded-2xl' />
          <div className='mt-10'>
              <ThumbNail />
          </div>
    </div>
  )
}

export default Product