import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {  selectMessage, selectServer } from '../slices/mahadiSlice';
import useAlertModelHook from '../useHook/useAlertModelHook';

function CustomModel() {
  const textMessage = useSelector(selectMessage)
  const sliceServer = useSelector(selectServer)
  
  const {handelMessage} = useAlertModelHook()

  return (
    <div className={`${ sliceServer === 200 ? 'bg-green-400' : 'bg-red-400' } modelStyle`}>
      <p className="text-black">{ `${textMessage}` }</p>
      <FaTimes size={16} color="#000" className='cursor-pointer' onClick={()=> handelMessage({server: 0, message:""})} />
    </div>
  )
}

export default CustomModel
