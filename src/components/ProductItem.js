import Image from "next/image";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCarts, selectProducts } from "../slices/basketSlice";
import useAlertModelHook from "../useHook/useAlertModelHook";
import ModelProduct from "./ModelProduct";
const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductItem({
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
  hasPrime,
  totalPrice,
  quantity,
  shopping,
}) {
  const [ismodel, setIsmodel] = useState(false);
  const [isproduct, setIsproduct] = useState(false);
  const dispatch = useDispatch();
  const ReduxCarts = useSelector(selectCarts);
  const ReduxProducts = useSelector(selectProducts);
  const { handelMessage } = useAlertModelHook();

// cart function
  const handelBasket = (id) => {
    
    const product = {
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
      hasPrime,
      totalPrice,
      quantity,
      shopping,
    }

    if (isproduct) {
      // alert("Product already added")
      handelMessage({ server: 400, message: "Product Already Added to Basket" });
      return;
    } else {
      setIsproduct(true)
      // SENDING THE PRODUCT AS AN ACTION TO THE REDUX STORE ...... THE CARTS OF BASKET SLICE
      dispatch(addToCart(product));
      handelMessage({image, server: 200, message: `${name} - This Product added to Basket ` });
      
    }
  };
// is model 
  const Ismodelhandeler=()=>{
    setIsmodel(!ismodel)
  }

  useEffect(() => {
    const filterCartData = ReduxCarts.filter((item) => item.id === id);
    if (!!filterCartData.length) {
      setIsproduct(true)
      return;
    }
  }, [isproduct]);

  return (
    <>
      <div className="relative flex flex-col m-5 bg-white z-10 p-10 rounded-md justify-between">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        <Image src={image} height={200} width={200} objectFit="contain" onClick={()=>Ismodelhandeler()} className="cursor-pointer" />

        <div className="flex-grow">
          <h4 className="my-3 capitalize underline cursor-pointer" onClick={(e)=> Ismodelhandeler()}>{name}</h4>
          <div className="flex items-center">
            {rating?.map((_, i) => <AiFillStar key={i} size={16} className="text-yellow-500" /> )}
            <p className="hover:underline cursor-pointer"> ({review} ratings)</p>
          </div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>
          <div className="mb-5">
            <Currency quantity={price} currency="GBP" />
          </div>
        </div>

        <div>
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
          <button
            disabled={isproduct}
            className={`mt-auto w-full mb:text-sm  ${isproduct ? 'bg-gray-300 rounded p-1 text-black cursor-not-allowed' : 'button'}`}
            onClick={() => handelBasket(id)}
          >
          {isproduct ? "Added to Basket" : 'Add to Basket' }
            
          </button>
        </div>
      </div>

      {/* MODEL  */}
      {ismodel && <ModelProduct image={image} handelBasket={handelBasket} Ismodelhandeler={Ismodelhandeler} id={id} name={name} price={price} colors={colors} company={company} review={review} isproduct={isproduct} /> }
      
    </>
  );
}

export default ProductItem;
