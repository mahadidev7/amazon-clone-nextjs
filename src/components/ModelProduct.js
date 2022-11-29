import React, { useState } from 'react'
import Currency from "react-currency-formatter";
import { FaTimes } from 'react-icons/fa';
import { AiFillStar } from "react-icons/ai";
import RelatedProduct from './RelatedProduct';
const MAX_RATING = 5;
const MIN_RATING = 1;
const ProductImages = [
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
]

function ModelProduct({id,image,Ismodelhandeler,handelBasket, name, price, colors, company, review}) {
    const [productQuantaty, setProductQuantaty] = useState(10);
    const [productImg, setProductImg] = useState(image);
    // rating  function 
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
 
    // const ProductQuntiter= (data)=> {
    //     if (data === 0) {
    //         if(productQuantaty === 0) return
    //         setProductQuantaty((productQuantaty)=> productQuantaty-1 )
    //     }
    //     if (data === 1) {
    //         setProductQuantaty((productQuantaty)=> productQuantaty+1 )
    //     }
    // }

  return (
    <div className="informationModel z-20 flex items-center justify-center" >
          <div className="w-5/6 h-5/6 bg-white mx-auto p-4 overflow-y-auto rounded-md">
            <div className="flex gap-9">
          {/* left site  */}
              <div className="w-3/5 h-3/4 border rounede-lg ">
                <div className="w-full h-5/6 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={productImg}
                    alt="product image"
                    className="w-[100%] h-[500px] object-contain p-1 rounded-md"
                  />
                </div>
                <div className="flex !flex-wrap gap-2 p-2 overflow-hidden h-1/6 border">
                  <img
                    loading="lazy"
                    src={image}
                    onClick={()=>setProductImg(image)}
                    alt="product image"
                      className="w-14 h-14 border-2 border-black object-fill rounded cursor-pointer"
                  />
                {
                  ProductImages?.map((image, i)=>(
                    <img
                      loading="lazy"
                      key={i}
                      src={image}
                      onClick={()=>setProductImg(image)}
                      alt="product image"
                      className="w-14 h-14 border-2 border-black object-fill rounded cursor-pointer"
                    />
                  ))
                }
                  
                </div>
              </div>
            {/* right site */}
              <div className="w-2/5 p-20 relative flex flex-col justify-center">
              <FaTimes className="absolute top-0 right-0 border-2 border-black cursor-pointer text-2xl bg-yellow-400 rounded" onClick={Ismodelhandeler}/>
            {/* name, rating , price */}
                <h4 className="mt-5 mb-1 capitalize text-5xl font-bold">{name}</h4>
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
                  
                  <p className="underline cursor-pointer">{review} ratings</p>
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
                <p>Company: {company}</p>

                <div className="my-5">
                  {/* <div className="flex my-5 items-center border justify-between gap-2 bg-white rounded">
                    <button className="border px-4 py-2 text-sm rounded button" onClick={()=>ProductQuntiter(0)}>-</button>
                    <p className="text-[18px] w-full rounded text-center py-1">{productQuantaty}</p>
                    <button className="border px-4 py-2 text-sm rounded button" onClick={()=>ProductQuntiter(1)}>+</button>
                  </div> */}
                  <button
                    className="mt-auto w-full mb:text-sm button"
                    onClick={() => handelBasket(id)}
                  >
                    Add to Basket
                  </button>
                </div>


              </div>
            </div>
            <div>
              <div className=' my-5'>
                  <h4 className='text-xl font-bold'>Description</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis accusantium assumenda, nesciunt ex modi beatae eaque qui molestiae voluptatibus natus. Eum necessitatibus aut tempora harum magni deserunt quam provident. Fugit dolorum dignissimos suscipit hic natus, autem, et quam mollitia dolor culpa, expedita illo obcaecati commodi eum sint minima fugiat!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ratione odio at libero consequatur modi sit commodi quia, obcaecati rem, aperiam aliquam necessitatibus est eum? Consectetur eaque voluptatum sint quod quibusdam repellendus tenetur deleniti repudiandae vitae aliquid vero excepturi nisi dolor alias explicabo suscipit, sed error esse cumque in? Nesciunt error minima ullam, magni omnis deserunt fugit architecto impedit minus.</p>
              </div>
              <div className=' my-5'>
                  <h4 className='text-xl font-bold'>Description-1</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis accusantium assumenda, nesciunt ex modi beatae eaque qui molestiae voluptatibus natus. Eum necessitatibus aut tempora harum magni deserunt quam provident. Fugit dolorum dignissimos suscipit hic natus, autem, et quam mollitia dolor culpa, expedita illo obcaecati commodi eum sint minima fugiat!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ratione odio at libero consequatur modi sit commodi quia, obcaecati rem, aperiam aliquam necessitatibus est eum? Consectetur eaque voluptatum sint quod quibusdam repellendus tenetur deleniti repudiandae vitae aliquid vero excepturi nisi dolor alias explicabo suscipit, sed error esse cumque in? Nesciunt error minima ullam, magni omnis deserunt fugit architecto impedit minus.</p>
              </div>
            </div>
            {/* <RelatedProduct /> */}
          </div>
        </div>
  )
}

export default ModelProduct