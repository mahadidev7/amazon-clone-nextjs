import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { AiFillStar } from 'react-icons/ai';

const MAX_RATING = 5
const MIN_RATING = 1

function ProductItem({id, title, price, description, category, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))+ MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}
        </p>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {
                Array(rating)
                ?.fill()
                ?.map((_, i) => <AiFillStar key={i} size={16} className="text-yellow-500" />)
            }
            
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency quantity={price} currency="GBP" />
        </div>
        
        <div>
            {
                hasPrime && 
                    <div className='flex items-center space-x-2 mt-5'>
                        <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
                        <p className='text-xs text-gray-500'>FREE NExr-day Delivery</p> 
                    </div>
            }
            <button className='mt-auto w-full mb:text-sm button'>Add to Basket</button>
        </div>

    </div>
  )
}

export default ProductItem