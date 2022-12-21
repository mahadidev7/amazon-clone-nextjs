import Image from "next/image";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addBookMarkProduct,
  selectBookMarks,
  selectCarts,
  cancelBookMarkProduct,
} from "../slices/basketSlice";
import useAlertModelHook from "../useHook/useAlertModelHook";
import ModelProduct from "./ModelProduct";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

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
  cart,
  save,
  designCommend = "cols",
}) {
  const [ismodel, setIsmodel] = useState(false);
  const [isproduct, setIsproduct] = useState(false);
  const dispatch = useDispatch();
  const ReduxCarts = useSelector(selectCarts);
  const { handelMessage } = useAlertModelHook();

  // cart function
  const handelBasket = (id) => {
    if (cart) {
      // alert("Product already added")
      handelMessage({
        server: 400,
        message: "Product Already Added to Basket",
      });
      return;
    } else {
      // SENDING THE PRODUCT AS AN ACTION TO THE REDUX STORE ...... THE CARTS OF BASKET SLICE
      dispatch(addToCart({ id }));
      handelMessage({
        image,
        server: 200,
        message: `${name} - This Product added to Basket `,
      });
    }
  };

  // Save product (BookMark)
  const saveproduct = (data) => {
    if (data === "save") {
      dispatch(addBookMarkProduct({ id }));
    }
    if (data === "cancel") {
      dispatch(cancelBookMarkProduct({ id }));
    }
  };

  // is model
  const Ismodelhandeler = () => {
    setIsmodel(!ismodel);
  };

  return (
    <>
      <div
        className={`relative ${
          designCommend === "cols" ? "flex flex-col" : "grid grid-cols-2"
        } m-5 bg-white z-10 p-10 rounded-md justify-between shadow`}
      >
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          onClick={() => Ismodelhandeler()}
          className="cursor-pointer"
        />

        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h4
              className="my-3 capitalize underline cursor-pointer"
              onClick={(e) => Ismodelhandeler()}
            >
              {name}
            </h4>
            {save ? (
              <BsFillBookmarkFill
                onClick={() => saveproduct("cancel")}
                size={18}
                className="cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={() => saveproduct("save")}
                size={18}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center">
            {rating?.map((_, i) => (
              <AiFillStar key={i} size={16} className="text-yellow-500" />
            ))}
            <p className="hover:underline cursor-pointer">
              {" "}
              ({review} ratings)
            </p>
          </div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>
          <div className="mb-5">
            <Currency quantity={price} currency="GBP" />
          </div>

          <div>
            {hasPrime ? (
              <div className="flex items-center space-x-2 mt-5">
                <img
                  className="w-12"
                  src="https://links.papareact.com/fdw"
                  alt=""
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
              </div>
            ) : (
              <div className="mt-16"></div>
            )}
            <button
              disabled={cart}
              className={`mt-auto w-full mb:text-sm  ${
                cart
                  ? "bg-gray-300 rounded p-1 text-black cursor-not-allowed"
                  : "button"
              }`}
              onClick={() => handelBasket(id)}
            >
              {cart ? "Added to Basket" : "Add to Basket"}
            </button>
          </div>
        </div>
      </div>

      {/* MODEL  */}
      {ismodel && (
        <ModelProduct
          image={image}
          handelBasket={handelBasket}
          Ismodelhandeler={Ismodelhandeler}
          id={id}
          name={name}
          price={price}
          colors={colors}
          company={company}
          review={review}
          isproduct={cart}
        />
      )}
    </>
  );
}

export default ProductItem;
