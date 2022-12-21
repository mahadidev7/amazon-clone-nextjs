import React from "react";

function LeftSide({
  catagorys,
  selectCatagory,
  catagoryHandlar,
  ReduxProducts,
}) {
  return (
    <div
      className="shadow rounded-md px-4 bg-white mx-2 border pb-5"
      id="productSticky"
    >
      <div className="border-b md-pb-8 pb-2">
        <h3 className="capitalize md:text-2xl text-lg text-gray-600 font-semibold my-10 md:pl-8">
          catagorys
        </h3>
        <div className="flex md:block flex-wrap md:justify-center">
          {catagorys?.map((item, key) => (
            <div key={key} className="flex items-center justify-center">
              <p
                onClick={() => catagoryHandlar(item)}
                className={`${
                  selectCatagory === item ? "text-black" : "text-gray-400"
                } hover:text-black text-lg capitalize pl-4 cursor-pointer my-1 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:w-44`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center md-mt-7 mt-2">
        <p
          onClick={() => catagoryHandlar("bookmark")}
          className={`${
            selectCatagory === "bookmark" ? "text-black" : "text-gray-400"
                } hover:text-black text-lg capitalize pl-4 cursor-pointer my-1 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:w-44 text-center`}
        >
          BookMark
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
