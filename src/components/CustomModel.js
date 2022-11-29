import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {  selectMessage, selectServer } from '../slices/mahadiSlice';
import useAlertModelHook from '../useHook/useAlertModelHook';

function CustomModel() {
  const textMessage = useSelector(selectMessage)
  const sliceServer = useSelector(selectServer)
  
  const {handelMessage} = useAlertModelHook()
  // const [animation, setAnimation] = useState('animate-bounce');
  const [isTrue, setIsTrue] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setAnimation('animate-none')
  //   }, 2500);
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsTrue(false)
  //   }, 2800);
  // }, []);



  return (
    <>
      {
        isTrue ? (
          <div className={`bg-[#232F3E] modelStyle z-20 animate-bounce hover:animate-none shadow-lg`}>
            <p className={`${ sliceServer === 200 ? 'text-white' : 'text-red-500' } capitalize text-sm`}>{ `${textMessage}` }</p>
            <FaTimes size={18} color="#fff" className='cursor-pointer' onClick={()=> handelMessage({server: 0, message:""})} />
          </div> 
        )
        : (
          <div className={`bg-[#232F3E] modelStyle z-20 animate-bounce hover:animate-none shadow-lg`}>
            <p className={`${ sliceServer === 200 ? 'text-white' : 'text-red-500' } capitalize text-sm`}>{ `${textMessage}` }</p>
            <FaTimes size={18} color="#fff" className='cursor-pointer' onClick={()=> handelMessage({server: 0, message:""})} />
          </div>
        )
       
      }
    </>
    
  )
}

export default CustomModel
