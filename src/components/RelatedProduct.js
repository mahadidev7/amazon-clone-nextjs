import React from 'react'
import { useSelector } from "react-redux";
import { selectProducts } from "../slices/basketSlice";
import ProductItem from './ProductItem';

function RelatedProduct() {
    const products = useSelector(selectProducts);
  return (
    <>   
        <h4 className='text-xl font-bold'>Related Products :</h4>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
        {products?.slice(0, 8)?.map((product) => (
            <ProductItem key={product.id} {...product} />
        ))}
        </div>
    </>
  )
}

export default RelatedProduct
