'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useBearStore } from '@/store';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({title, id, price, description, category, image}) => {
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const [hasPrime] = useState(Math.random() < 0.5);
  const { addToCart, cartItems }= useBearStore((state) => state);

  console.log('Kart_Update',cartItems)
  return (
    <div className='relative flex flex-col m-5 bg-white z-20 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image 
        src={image} 
        height={200} 
        width={200} 
        alt='Product Image'        
        className='max-h-200 object-contain self-center'
        style={{ maxHeight: '200px' }}
        />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-5 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}        
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>${price}</div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5 mb-2'>          
          <img className='w-12' src="https://vectorseek.com/wp-content/uploads/2023/08/Prime-Logo-Vector.svg-.png" alt="" />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={() => addToCart({
        id: id, 
        title: title,        
        rating: rating,         
        price: price,          
        description: description ,
        category: category,
        image: image, 
        hasPrime: hasPrime        
      })} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product