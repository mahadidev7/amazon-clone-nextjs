import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';

import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, selectCarts } from '../slices/basketSlice';
import useAlertModelHook from '../useHook/useAlertModelHook';
const MAX_RATING = 5
const MIN_RATING = 1

function ProductItem({id, name, price, description, category, image}) {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()
    const carts = useSelector(selectCarts)
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))+ MIN_RATING
    )
    const {handelMessage} = useAlertModelHook()

    // hasPrime image 
    const [hasPrime] = useState(Math.random() < 0.5)

    // cart function 
    const handelBasket = () => {
        const filterData =  carts.filter(item => item.id === id)
        if(!!filterData.length){
            // alert("Product already added")
            handelMessage({server: 400, message:"Product Already Added"})
            return
        }else {
            dispatch(addToCarts({id}))
            handelMessage({server: 200, message:"Product Success Add"})
        }
    }

  return (
    <>
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-md justify-between'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}
            </p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            
            <div className='flex-grow'>
                <h4 className='my-3'>{name}</h4>
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
            </div>
            
            <div>
                {
                    hasPrime && 
                        <div className='flex items-center space-x-2 mt-5'>
                            <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
                            <p className='text-xs text-gray-500'>FREE NExr-day Delivery</p> 
                        </div>
                }
                <button className='mt-auto w-full mb:text-sm button' onClick={()=> handelBasket()}>Add to Basket</button>
            </div>

        </div>

        
    </>
  )
}

export default ProductItem