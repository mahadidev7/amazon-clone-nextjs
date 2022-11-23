import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, selectCarts } from "../slices/basketSlice";
import useAlertModelHook from "../useHook/useAlertModelHook";
import { FaTimes } from 'react-icons/fa';
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
}) {
  const [ismodel, setIsmodel] = useState(false);
  const dispatch = useDispatch();
  const carts = useSelector(selectCarts);
  const { handelMessage } = useAlertModelHook();

// rating  function 
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const ratingCounter =  Math.floor(Math.random() * 200) 
// hasPrime image function
  const [hasPrime] = useState(Math.random() < 0.5);
// cart function
  const handelBasket = () => {
    const filterData = carts.filter((item) => item.id === id);
    if (!!filterData.length) {
      // alert("Product already added")
      handelMessage({ server: 400, message: "Product Already Added" });
      return;
    } else {
      dispatch(addToCarts({ id }));
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
          <div className="flex">
            {Array(rating)
              ?.fill()
              ?.map((_, i) => (
                <AiFillStar key={i} size={16} className="text-yellow-500" />
              ))}
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
              <p className="text-xs text-gray-500">FREE NExr-day Delivery</p>
            </div>
          )}
          <button
            className="mt-auto w-full mb:text-sm button"
            onClick={() => handelBasket()}
          >
            Add to Basket
          </button>
        </div>
      </div>

      {/* MODEL  */}
      {ismodel && (
        <div className="informationModel z-20 flex items-center justify-center" >
          <div className=" w-5/6 h-5/6 bg-white mx-auto p-4 overflow-y-auto rounded-md">
            <div className="flex">
              <div className="w-2/5 h-3/4 border rounede-lg ">
                <div className="w-full h-5/6 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-[100%] h-[500px] object-contain p-1 rounded-md"
                  />
                </div>
                <div className="flex gap-2 py-2 px-2 w-full h-1/6 border">
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-14 h-14 border-2 border-black object-fill rounded cursor-pointer"
                  />
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-14 border-2 border-black h-14 object-fill rounded cursor-pointer"
                  />
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-14 border-2 border-black h-14 object-fill rounded cursor-pointer"
                  />
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-14 border-2 border-black h-14 object-fill rounded cursor-pointer"
                  />
                  <img
                    loading="lazy"
                    src={image}
                    alt="product image"
                    className="w-14 border-2 border-black h-14 object-fill rounded cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-3/5 ml-3 relative flex items-center flex-col">
              <FaTimes className="absolute top-0 right-0 text-2xl border cursor-pointer" onClick={()=>Ismodelhandeler()}/>
{/* name, rating , price */}
                <h4 className="my-5 capitalize text-5xl">{name}</h4>
                  <div className="text-xl font-bold flex">
                    <Currency quantity={price} currency="GBP" />
                  </div>
                <div className="flex items-center gap-2">

                  <div className="flex">
                    {Array(rating)
                      ?.fill()
                      ?.map((_, i) => (
                        <AiFillStar
                          key={i}
                          size={16}
                          className="text-yellow-500"
                        />
                      ))}
                  </div>
                  
                  <p className="underline cursor-pointer">{ratingCounter} ratings</p>
                </div>
{/* colors  */}
                <div className="flex gap-2 items-center">
                <p>Colors: </p>
                  {colors?.map((v, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full shadow-lg`}
                      style={{background:v}}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              perferendis nesciunt ullam laudantium? Expedita molestias
              cupiditate rem possimus enim assumenda ratione odio, odit, culpa
              ut officia voluptatibus. Voluptatibus distinctio quis facilis
              delectus sint consectetur, dolorem dolorum? Quo quae tempore
              distinctio dolorem perspiciatis quos voluptates iure sed veniam
              reiciendis unde maiores deleniti quidem aspernatur ipsa pariatur
              corrupti similique fuga quam, libero placeat temporibus aliquam
              dolore. Eius iure, officia fugiat doloribus ab minus autem. Ipsa
              necessitatibus animi fugiat, ipsam placeat eos tempora cupiditate
              illum minima accusamus quibusdam, rerum nam tenetur aut mollitia
              voluptatibus, laborum modi dolorem quaerat odio eum sapiente cum?
              Eos!
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItem;
