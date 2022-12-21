import React from 'react'

function LeftSide({ catagorys, selectCatagory, catagoryHandlar, ReduxProducts}) {
  return (
    <div className='shadow rounded-md md:px-32 px-4 bg-white' id="productSticky">
      <div className='border-b pb-8'>
        <h3 className='capitalize text-2xl text-gray-600 font-semibold my-6'>catagorys</h3>
        {
          catagorys?.map((item, key) => {

            return(
              <div key={key} className="flex items-center ">
                <p
                onClick={() => catagoryHandlar(item)}
                className={`${selectCatagory === item ? 'text-black' : 'text-gray-400'} hover:text-black capitalize pl-4 cursor-pointer my-1 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-fit`}>{item}</p>
              </div>
            )
          }
          )
        }
      </div>
      
      <div className="flex items-center mt-7">
          <p
          onClick={()=>catagoryHandlar('bookmark')}
          className={`${selectCatagory === 'bookmark' ? 'text-black' : 'text-gray-400'} hover:text-black capitalize pl-4 cursor-pointer my-1 transition transform hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-fit md:pb-9 pb-3`}>BookMark</p>
        </div>
    </div>
  )
}

export default LeftSide