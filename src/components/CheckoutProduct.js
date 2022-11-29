import Image from 'next/image'
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBaskets, removeFromBasket, removeFromCart } from '../slices/basketSlice';
import useAlertModelHook from '../useHook/useAlertModelHook';

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
    const dispatch = useDispatch();
    const ReduxBaskets = useSelector(selectBaskets);
    const { handelMessage } = useAlertModelHook();
  
    const addItemToBasket = ()=> {
      let product = {
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
          }
      dispatch(addToBasket(product));
    }

    const removefrombasket = ()=> {
      dispatch(removeFromBasket({id}));
    }

     const removefromcart = ()=> {
      handelMessage({ server: 200, message: `${name} - Delete this Product ` });
      dispatch(removeFromBasket({id}));
      dispatch(removeFromCart({id}));
    }
    
  return (
    <div className='grid grid-cols-5 items-center border-b'>
    {/* Left side */}
          <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
          />
    {/* middel side  */}
      <div className='col-span-4 mx-5 grid grid-cols-3 items-center'>
        <div className='md:col-span-2 col-span-3'>
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
    {/* Right side  */}
        <div className='flex flex-col gap-2 my-2 col-span-3 md:col-span-1'>
            {
              !!ReduxBaskets.filter((item) => item.id === id).length 
              ?
                <button className='button' onClick={removefrombasket}>Remove from Basket</button>
              : 
                <button className='button' onClick={addItemToBasket}>Add to Basket</button>
            }
            
          <button 
            className='bg-red-500 hover:bg-red-400 text-white rounded text-sm p-2'
            onClick={removefromcart}
            >Delete</button>
        </div>
      </div>
      
    </div>
  )
}

export default CheckoutProduct
