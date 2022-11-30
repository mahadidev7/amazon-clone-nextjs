import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import Currency from "react-currency-formatter";
import CheckoutProduct from '../components/CheckoutProduct';
import CustomModel from '../components/CustomModel';
import Header from '../components/Header'
import { selectCarts, selectBaskets, selectTotalPrice } from '../slices/basketSlice';
import { selectServer } from '../slices/mahadiSlice';
import { useSession } from 'next-auth/react';
import BackToTop from "../components/BackToTop"
import Footer from "../components/Footer"

function Checkout() {
  const ReduxBaskets = useSelector(selectBaskets);
  const ReduxCarts = useSelector(selectCarts);
  const ReduxTotalPrice = useSelector(selectTotalPrice);
  const sliceServer = useSelector(selectServer)
  const {data: session} = useSession()

  const proceedhandeler =()=> {
      alert("123")

  }

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='flex items-center justify-center'>
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />
      </div>
      <main className='md:grid md:grid-cols-7 max-w-screen-2xl mx-auto '>
        {/* Left  */}
        <div className='md:m-3 m-1 shadow-sm col-span-5'>

          <div className='flex flex-col space-y-10 bg-white md:p-5 p-1 rounded'>
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
        <div className='shadow-md flex flex-col bg-white p-3 col-span-2 md:mt-3 my-5' >
          <h2 className='text-2xl border-b pb-4 text-center'>Subtotal ({ReduxBaskets.length} items){": "} 
            <spam className="font-bold">
            <Currency quantity={ReduxTotalPrice} currency="GBP" />
            </spam>
          </h2>
          <button
            disabled={!session}
            className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`} onClick={proceedhandeler}>
            {
              !session ? "Sign in to chechout" : "Proceed to chechout"
            }
          </button>
        </div>
      </main>
      {/* footer start  */}
      <footer>
        <BackToTop />
        <Footer />
      </footer>
    {/* footer end  */}
    { sliceServer === 0 ? '' : <CustomModel /> }
    </div>
  )
}

export default Checkout
