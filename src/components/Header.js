import React from 'react';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';


const Header = () => {
  return (
    <header>
        {/* // top mav  */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 '>
            {/* logo */}
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    src= "https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                />
            </div>

            {/* Search  */}
            <div className='hidden sm:flex items-center h-10 cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-md flex-grow'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' />
                <BsSearch className="h-12 p-4 text-bold" color='#000' size={60} />
            </div>

            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap py-2'>
                <div className=' link'>
                    <p>Hello Mahadidev7</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p> 

                </div>
                <div className=' link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-10 h-5 w-5 bg-yellow-400 flex items-center justify-center rounded-full text-black font-bold'>10</span>
                    <AiOutlineShoppingCart size={30} />
                    <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p> 
                </div>
            </div>
        </div>
        {/* // bottom nav  */}
        <div></div>
    </header>
  )
}

export default Header