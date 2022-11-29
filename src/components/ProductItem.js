import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, selectCarts, selectProducts } from "../slices/basketSlice";
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
  hasPrime
}) {
  const [ismodel, setIsmodel] = useState(false);
  const [state, setstate] = useState(1);
  const dispatch = useDispatch();
  const ReduxCarts = useSelector(selectCarts);
  const ReduxProducts = useSelector(selectProducts);
  const { handelMessage } = useAlertModelHook();

// rating  function 
  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );

// cart function
  const handelBasket = (id) => {
    const filterCartData = ReduxCarts.filter((item) => item.id === id);
    if (!!filterCartData.length) {
      // alert("Product already added")
      handelMessage({ server: 400, message: "Product Already Added" });
      return;
    } else {
      // SENDING THE PRODUCT AS AN ACTION TO THE REDUX STORE ...... THE CARTS OF BASKET SLICE
      dispatch(addToCarts(...ReduxProducts.filter((item) => item.id === id)));
      handelMessage({ server: 200, message: "Product Success Add" });
    }
  };
// is model 
  const Ismodelhandeler=()=>{
    setIsmodel(!ismodel)
  }

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
            className="mt-auto w-full mb:text-sm button"
            onClick={() => handelBasket(id)}
          >
            Add to Basket
          </button>
        </div>
      </div>

      {/* MODEL  */}
      {ismodel && <ModelProduct image={image} handelBasket={handelBasket} Ismodelhandeler={Ismodelhandeler} id={id} name={name} price={price} colors={colors} company={company} review={review} /> }
      
    </>
  );
}

export default ProductItem;
