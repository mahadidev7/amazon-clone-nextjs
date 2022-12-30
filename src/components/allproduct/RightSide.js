import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { BsSearch, BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

function RightSide({ products, handleSearch, searchTerm, SortProduct }) {
  const [showResults, setShowResults] = useState(true);
  const [designCommend, setDesignCommend] = useState("cols");

  return (
    <div className="md:col-span-3 col-span-1 px-1">
      {/* filtter area  */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-3 w-full px-2 md:px-0">
        <div className="flex items-center cursor-pointer rounded-md flex-grow bg-white border w-full">
          <input
            onMouseOver={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            onFocus={() => setShowResults(true)}
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            className="p-4 h-full w-full flex-grow flex-shrink focus:outline-none px-4 rounded-md"
            placeholder="Search...."
          />
          <BsSearch
            className="h-10 p-3 text-bold mr-1 bg-yellow-400 hover:bg-yellow-500 rounded-md"
            color="#000"
            size={60}
          />
        </div>
        <div className="bg-white flex  items-center justify-between p-2 rounded-md border w-full">
          <div className="flex">
            <BsGrid3X3Gap
              className={`p-2 text-bold mr-1 ${
                designCommend === "cols" ? "bg-yellow-400" : "bg-white"
              } hover:bg-yellow-500 rounded-md cursor-pointer `}
              color="#000"
              size={40}
              onClick={() => setDesignCommend("cols")}
            />
            <AiOutlineMenu
              className={`p-2 text-bold mr-1 ${
                designCommend === "rows" ? "bg-yellow-400" : "bg-white"
              }  hover:bg-yellow-500 rounded-md cursor-pointer`}
              color="#000"
              size={40}
              onClick={() => setDesignCommend("rows")}
            />
          </div>
          <select
            className="border rounded-md p-2 cursor-pointer"
            onChange={(e) => SortProduct(e)}
          >
            <option value={"az"}>Name(a-z)</option>
            <option value={"za"}>Name(z-a)</option>
            <option value={"plow"}>Price(Lowest)</option>
            <option value={"pHigh"}>Price(Hight)</option>
          </select>
        </div>
      </div>

      <div className="my-3">
        <p className="text-gray-400">{products.length} Products Found </p>
      </div>

      <div
        className={` grid ${
          designCommend === "cols"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }  mx-auto bg-gray-50 gap-2`}
      >
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
