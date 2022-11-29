import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header'
import { selectCarts } from '../slices/basketSlice';

function Checkout() {
  const ReduxCarts = useSelector(selectCarts);

  return (
    <div className='bg-gray-100'>
      <Header />
      
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left  */}
        <div className='flex-grow md:m-5 m-1 shadow-sm'>
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className='flex flex-col space-y-10 bg-white p-5 rounded'>
            <h1 className='text-3xl border-b pb-4 font-bold'>
              {
                ReduxCarts.length === 0 ? "Your Amazon Basket is empty" : "Shopping Basket "
              }
            </h1>

            {
              ReduxCarts?.map((item, i) => <CheckoutProduct key={i} {...item} />)
            }

          </div>
        </div>
        {/* Right  */}
        <div>
          <h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
        </div>
      </main>
    </div>
  )
}

export default Checkout
