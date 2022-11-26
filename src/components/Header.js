import React from 'react';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectCarts } from '../slices/basketSlice';
import { signIn } from 'next-auth/react'

const Header = () => {
    const carts = useSelector(selectCarts)

  return (
    <header id='top'>
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
            <div className='hidden sm:flex items-center h-10 cursor-pointer  rounded-md flex-grow overflow-hidden'>
                <div className='bg-white border flex justify-center items-center px-3 gap-1'>
                    <AiOutlineMenu className="h-12 text-bold " color='#000' size={16} />
                    <p>All</p>
                </div>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink  focus:outline-none px-4' placeholder='Search....' />
                <BsSearch className="h-12 p-4 text-bold bg-yellow-400 hover:bg-yellow-500" color='#000' size={60} />
            </div>

            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap py-2'>
                <div onClick={signIn} className='link'>
                    <p>Hello Mahadidev7</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p> 

                </div>
                <div className=' link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-10 h-5 w-5 bg-yellow-400 flex items-center justify-center rounded-full text-black font-bold'>{carts.length}</span>
                    <AiOutlineShoppingCart size={30} />
                    <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p> 
                </div>
            </div>
        </div>
        {/* // bottom nav  */}
        <div className='flex items-center space-x-2 p-2 py-3 pl-6 text-sm text-white' style={{background: "#232F3E", overflow:"auto"}}>
            {/* <p className='link flex items-center whitespace-nowrap'>
                <AiOutlineMenu size={25}/>
                All
            </p> */}
            <p className='link whitespace-nowrap'>Prime Video</p>
            <p className='link whitespace-nowrap'>Amazon Business</p>
            <p className='link whitespace-nowrap'>Today's Deals</p>
            <p className='link whitespace-nowrap'>Electronics</p>
            <p className='link whitespace-nowrap'>Food & Grocery</p>
            <p className='link whitespace-nowrap'>Prime</p>
            <p className='link whitespace-nowrap'>Buy Again</p>
            <p className='link whitespace-nowrap'>Shopper Toolkit</p>
            <p className='link whitespace-nowrap'>Health  & Personal Care</p>
        </div>
    </header>
  )
}

export default Header