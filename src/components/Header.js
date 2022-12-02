import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectCarts, selectProducts } from '../slices/basketSlice';
import { signIn, signOut, useSession } from 'next-auth/react'
import useAlertModelHook from '../useHook/useAlertModelHook';
import Currency from "react-currency-formatter";
import { useRouter } from "next/router"

const Header = () => { 
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(true)
    const router = useRouter()
    const ReduxProducts = useSelector(selectProducts);
    const ReduxCarts = useSelector(selectCarts)
    const {data: session} = useSession()
    const { handelMessage } = useAlertModelHook();

    const AuthLogIn = () => {
        // session ? signOut : signIn
        if(session){
            signOut()
            handelMessage({ server: 200, message: "Sign out Successfully" });
            return
        }
        if(!session){
            signIn()
            // handelMessage({ server: 200, message: "sign in Successfully" });
            return
        }
    }

    const handleSearch = e => {
        let trem = e.target.value
        trem = trem.toLowerCase()
        setSearchTerm(trem)
        setSearchResults(ReduxProducts?.filter(product => product.name.includes(trem) || product.category.includes(trem) || product.company.includes(trem)))
    }
    

  return (
    <header id='sticky'>
        {/* // top mav  */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 '>
            {/* logo */}
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    onClick={()=> router.push("/")}
                    src= "https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className='cursor-pointer'
                />
            </div>

            {/* Search  */}
            <div className='hidden relative sm:flex items-center h-10 cursor-pointer rounded-md flex-grow bg-white'>
                <Link href={'./Allproduct'}>
                    <div className='hidden bg-white text-bold border-r md:flex justify-center items-center px-3 gap-1 rounded-tl-md rounded-bl-md'>
                        <AiOutlineMenu className="h-10 text-bold" color='#000' size={16} />
                        <p>All</p>
                    </div>
                </Link>
                
                <input
                    onMouseOver={() => setShowResults(true)} 
                    onBlur={() => setShowResults(false)} 
                    onFocus={() => setShowResults(true)} 
                    value={searchTerm} 
                    onChange={handleSearch}
                    type="text" 
                    className='p-2 h-full w-6 flex-grow flex-shrink  focus:outline-none px-4 rounded' 
                    placeholder='Search....' 
                />
                <BsSearch className="h-10 p-3 text-bold bg-yellow-400 hover:bg-yellow-500 rounded-tr-md rounded-br-md" color='#000' size={60} />

                {showResults && (
                        <div onClick={() => setShowResults(true)} onMouseOver={() => setShowResults(true)} onMouseLeave={() => setShowResults(false)} className="absolute w-full bg-white bottom-0 z-40 rounded-md" style={{ transform: 'translateY(100%)', height: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
                            {(!!searchResults?.length) ? searchResults?.map(({id, name, price, category}) => (
                                <div className="p-2 mt-2 border-b-2 rounded-md border-gray-100 bg-gray-50 flex justify-between items-center">
                                    
                                    <div>
                                        <h5 className="font-medium text-sm text-gray-600">{name}</h5>
                                        <p className="text-xs text-gray-400">{category} </p>
                                    </div>
                                    <div className='flex justify-between items-center text-sm text-gray-600'>
                                        <Currency quantity={price} currency="GBP" />
                                    </div>
                                </div>
                            )) : (
                                <>
                                    {searchTerm && <p className="text-xs text-gray-400 p-2">No product found</p>}
                                </>
                            )}
                        </div>
                    )}
            </div>

            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-0 md:space-x-6 md:mx-6 mx-1 whitespace-nowrap py-2'>
                <div onClick={()=>AuthLogIn()} className='link'>
                <p>
                {
                    session ? `Hello, ${session?.user?.name} `: 'Sign in'
                }
                </p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p> 
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                {/* <Link href='/Checkout'> */}
                    <div 
                        className='relative link flex items-center' 
                        onClick={()=> router.push("/Checkout")}
                    >
                        <span className='absolute top-0 left-6 h-5 w-5 bg-yellow-400 flex items-center justify-center rounded-full text-black font-bold'>{ReduxCarts.length}</span>
                        <AiOutlineShoppingCart size={30} />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p> 
                    </div>
                {/* </Link> */}
            </div>
        </div>
        {/* // bottom nav  */}
        <div className='flex items-center space-x-2 py-3 px-3 text-sm text-white bg-[#232F3E] overflow-auto'>
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