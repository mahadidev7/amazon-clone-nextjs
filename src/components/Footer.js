import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
        <div className='text-gray-300  bg-[#232F3E] md:px-28 px-5 pt-28'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-9 pb-10'>
                <div className="text-sm flex flex-col">
                    <p className="text-xl text-white my-2">Get to Know Us</p>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Careers</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Blog</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">About Amazon</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Investor Relations</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Devices</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Science</a>
                </div>
                <div className="text-sm flex flex-col">
                    <p className="text-xl text-white my-2">Make Money with Us</p>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Sell products on Amazon</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Science</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Sell on Amazon Business</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Investor Relations</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Devices</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">About Amazon</a>
                </div>
                <div className="text-sm flex flex-col">
                    <p className="text-xl text-white my-2">Get to Know Us</p>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Careers</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Blog</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">About Amazon</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Investor Relations</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Devices</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Science</a>
                </div>
                <div className="text-sm flex flex-col">
                    <p className="text-xl text-white my-2">Make Money with Us</p>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Sell products on Amazon</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Science</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Sell on Amazon Business</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Investor Relations</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">Amazon Devices</a>
                    <a className="mb-1 hover:underline" target="__blank" href="https://mahadidev7-portfolio.web.app/">About Amazon</a>
                </div>
            </div>
            <div className='mt-10 flex justify-between pt-5 pb-10'>
                <Image
                    src= "https://links.papareact.com/f90"
                    width={150}
                    height={25}
                    objectFit="contain"
                    className='cursor-pointer'
                />
                <p>This is a Portfolio Demo Website. create by <a className='underline bg-[#090d11] p-2 rounded' target="__blank" href="https://mahadidev7-portfolio.web.app/">Mahadidev7</a></p>
            </div>
        </div>
        
    </>
  )
}

export default Footer