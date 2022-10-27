import React from 'react'
import ProductItem from './ProductItem'

function ProductFeed({products}) {

  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto '>
        {
            products
            ?.slice(0,4)
            ?.map((product => <ProductItem key={product.id} {...product} /> ))
        }
        <img 
            className='md:col-span-full mx-auto' 
            src='https://links.papareact.com/dyz' 
            alt='ad' 
        />
        <div className='md:col-span-2'>
            {
                products
                ?.slice(4,5)
                ?.map((product => <ProductItem key={product.id} {...product} /> ))
            }
        </div>
        {
            products
            ?.slice(5, products.length)
            ?.map((product => <ProductItem key={product.id} {...product} /> ))
        }
    </div>
  )
}

export default ProductFeed