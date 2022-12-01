import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Image from "next/image";
import {  selectImage, selectMessage, selectServer } from '../slices/mahadiSlice';
import useAlertModelHook from '../useHook/useAlertModelHook';

function CustomModel() {
  const img = useSelector(selectImage)
  const textMessage = useSelector(selectMessage)
  const sliceServer = useSelector(selectServer)
  
  const {handelMessage} = useAlertModelHook()
  const [animation, setAnimation] = useState('animate-bounce');
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setAnimation('animate-none')
    }, 2500);
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsTrue(false)
  //   }, 2800);
  // }, []);


  return (
    <>
      {
        isTrue ? (
          <div className={` ${ sliceServer === 200 ? 'bg-[#51a351]' : 'bg-[#bd362f]'} ${animation} modelStyle z-20 animate-bounce hover:animate-none shadow-lg`}>
          <div className='flex items-center gap-1'>
              {
                img &&
                <div className='rounded-full overflow-hidden w-10 h-10 border'>
                  <Image 
                    src={img}
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                </div>
              }
              <p className={`text-white capitalize text-sm`}>{ `${textMessage}` }</p>
          </div>
            
            <FaTimes size={18} color="#fff" className='cursor-pointer' onClick={()=> handelMessage({server: 0, message:""})} />
          </div>
        )
        : (
          <div className={` ${ sliceServer === 200 ? 'bg-[#51a351]' : 'bg-[#bd362f]'} ${animation} modelStyle z-20 animate-bounce hover:animate-none shadow-lg`}>
            <p className={`text-white capitalize text-sm`}>{ `${textMessage}` }</p>
            <FaTimes size={18} color="#fff" className='cursor-pointer' onClick={()=> handelMessage({server: 0, message:""})} />
          </div>
        )
       
      }
    </>
    
  )
}

export default CustomModel
