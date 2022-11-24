import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getmessage } from '../slices/mahadiSlice';

function useAlertModelHook() {
    const [isAlert, setIsAlert] = useState(false);
    const [textMessage, setTextMessage] = useState(null);
    const dispatch = useDispatch()

    const handelMessage = (data) => {
        if(!data) return
        dispatch(getmessage({server: 0, message: ""}))
        setTimeout(() => {
          dispatch(getmessage({server: data?.server, message: data?.message}))
          setTextMessage(data?.message)
          setIsAlert(true)
        }, 30);
        // clearTimeout(startTimer)
        // starttimer()

    }

    // useEffect(() => {
    //     if(isAlert) {
    //         setTimeout(function(){
    //             setIsAlert(false)
    //             dispatch(getmessage({server: 0, message: ""}))
    //        }, 6000);
    //     }
    // }, [isAlert]);

  return {textMessage, isAlert, handelMessage}
}

export default useAlertModelHook