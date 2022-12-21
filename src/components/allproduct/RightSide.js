import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { BsSearch, BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

function RightSide({ products, handleSearch, searchTerm }) {
  const [showResults, setShowResults] = useState(true);
  const [designCommend, setDesignCommend] = useState('rows');

  return (
    <div className="md:col-span-2 col-span-1">
      {/* filtter area  */}
      <div className="grid grid-cols-3 justify-between items-center">
        <div className="col-span-2 flex items-center cursor-pointer rounded-md flex-grow bg-white md:ml-5 ml-2">
          <input
            onMouseOver={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            onFocus={() => setShowResults(true)}
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            className="p-4 h-full w-6 flex-grow flex-shrink  focus:outline-none px-4 rounded"
            placeholder="Search...."
          />
          <BsSearch
            className="h-10 p-3 text-bold mr-1 bg-yellow-400 hover:bg-yellow-500 rounded-md"
            color="#000"
            size={60}
          />
        </div>
        <div className="bg-white flex items-center justify-between p-2 rounded-md md:mx-5 mx-2">
            <div className="flex">
              <BsGrid3X3Gap
                className={`p-2 text-bold mr-1 ${designCommend === 'cols'? 'bg-yellow-400' : 'bg-white' } hover:bg-yellow-400 rounded-md cursor-pointer `}
                color="#000"
                size={40}
                onClick={()=> setDesignCommend('cols')}
              />
              <AiOutlineMenu 
                className={`p-2 text-bold mr-1 ${designCommend === 'rows'? 'bg-yellow-400' : 'bg-white' }  hover:bg-yellow-500 rounded-md cursor-pointer`} 
                color="#000" 
                size={40}
                onClick={()=> setDesignCommend('rows')}
              />
            </div>
            <select className="border rounded-md p-2 cursor-pointer">
              <option value={1}>Price(Lowest)</option>
              <option value={1}>Price(Hight)</option>
              <option value={1}>Name(a-z)</option>
              <option value={1}>Name(z-a)</option>
            </select>
        </div>
      </div>

      <div className=" md:mx-5 mx-2 mt-3">
        <p className="text-gray-400">{products.length} Products Found</p>
      </div>

      <div className={` grid ${designCommend === 'cols' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1' }  mx-auto bg-gray-50`}>
        {products?.map((product, key) => (
          <ProductItem key={key} {...product} designCommend={designCommend} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="bg-white flex flex-col pb-7 rounded items-center justify-center my-3">
          <Image
            src={`https://i.ibb.co/cLdVCws/df.jpg`}
            width={300}
            height={250}
            objectFit="contain"
          />
          <p className="text-gray-400">Product is not Found !!!</p>
        </div>
      )}
    </div>
  );
}

export default RightSide;
