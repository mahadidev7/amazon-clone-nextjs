import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateToCartQuantity,
  updateToCartshopping,
} from "../slices/basketSlice";
import useAlertModelHook from "../useHook/useAlertModelHook";

function CheckoutProduct({
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
  shipping,
  save
}) {
  const dispatch = useDispatch();
  const { handelMessage } = useAlertModelHook();

// Add or Remove from the Payment area...
  const updatetocartshopping = (data)=>{
    dispatch(updateToCartshopping({ id, type: data }))
  }

// Card product Quantity update...
  const quantityupdate = (data) => {
    if(data === "decrement" && quantity === 1){
      handelMessage({
        image,
        server: 400,
        message: `the product cannot decrement. if you want to delete please click the Delete button`,
      });
       return
    }
    dispatch(updateToCartQuantity({ id, type: data }));
  };

// Remove from cart
  const removefromcart = () => {
      handelMessage({
        image,
        server: 400,
        message: `${name} - Delete this Product from the Basket`,
      });
      dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5 items-center border-b">
      {/* Left side */}
      <Image src={image} width={200} height={200} objectFit="contain" />
      {/* middel side  */}
      <div className="col-span-4 mx-5 grid grid-cols-3 items-center">
        <div className="md:col-span-2 col-span-3">
          <p>{name}</p>
          <div className="flex items-center">
            {rating?.map((_, i) => (
              <AiFillStar key={i} size={16} className="text-yellow-500" />
            ))}
            <p className="hover:underline cursor-pointer">
              {" "}
              ({review} ratings)
            </p>
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>

          <div className="flex gap-1 items-center">
            <Currency quantity={price} currency="GBP" />
            <p>×</p>
            <h1>{quantity}</h1>
            <p>=</p>
            <Currency quantity={totalPrice} currency="GBP" />
          </div>

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
        </div>
        {/* Right side  */}
        <div className="flex flex-col gap-2 my-2 col-span-3 md:col-span-1 md:pl-3">

        <div className="grid grid-cols-5 ">
          <buttom className="col-span-1 bg-gray-300 active:border active:border-gray-500 border py-1 rounded text-center text-xl cursor-pointer" onClick={()=> quantityupdate("decrement")}>-</buttom>
          <h1 className="col-span-3 text-center">{quantity}</h1>
          <buttom className="col-span-1 bg-gray-300 active:border active:border-gray-500 border py-1 rounded text-center text-xl cursor-pointer" onClick={()=> quantityupdate("increment")}>+</buttom>
        </div>

          {shipping ? (
            <button className="button" onClick={()=> updatetocartshopping("false")}>
              Remove from Basket
            </button>
          ) : (
            <button className="button" onClick={()=> updatetocartshopping("true")}>
              Add to Basket
            </button>
          )}

          <button
            className="bg-red-500 hover:bg-red-400 text-white rounded text-sm p-2"
            onClick={removefromcart}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
