import Image from 'next/image'
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";

function CheckoutProduct({
  id,
  name,
  price,
  description,
  category,
  image,
  colors,
  company,
  rating,
  review,
  hasPrime
  }) {
  return (
    <div className='grid grid-cols-5 items-center'>
    {/* Left side */}
        {/* <div className='w-24 h-20 flex items-center justify-center rounded-2xl bg-gray-200 overflow-hidden'> */}
          <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
          />
        {/* </div> */}
    {/* Middle  */}
      <div className='col-span-3 mx-5 '>
        <p>{name}</p>
        <div className="flex items-center">
          {rating?.map((_, i) => <AiFillStar key={i} size={16} className="text-yellow-500" /> )}
          <p className="hover:underline cursor-pointer"> ({review} ratings)</p>
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
            <div className="flex items-center space-x-2 mt-5">
              <img
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
      </div>
    {/* Right Side  */}
      <div className='flex flex-col gap-2 justify-self-end'>
        <button className='button'>Add to Basket</button>
        <button className='button'>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
