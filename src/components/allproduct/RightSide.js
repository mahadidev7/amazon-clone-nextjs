import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { BsSearch } from 'react-icons/bs';
import Image from "next/image";

function RightSide({ products, handleSearch, searchTerm }) {
  const [showResults, setShowResults] = useState(true)

  return (
    <div className="md:col-span-2 col-span-1">
      <div className="flex items-center cursor-pointer rounded-md flex-grow bg-white md:mx-5 mx-2">

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

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-gray-50">
        {products?.map((product, key) => (
          <ProductItem key={key} {...product} />
        ))}
      </div>

          {products.length === 0 &&
              <div className="bg-white flex flex-col pb-7 rounded items-center justify-center my-3">
                <Image
                  src={`https://i.ibb.co/cLdVCws/df.jpg`}
                  width={300}
                  height={250}
                  objectFit="contain"
                />
                <p className="text-gray-400">Product is not Found !!!</p>
              </div>
            }
    </div>
  );
}

export default RightSide;
