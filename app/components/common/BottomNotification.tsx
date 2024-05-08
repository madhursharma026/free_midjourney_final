"use client"

import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { TbAlertTriangleFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { userContext } from '../UserContextProvider';
import useAuth from '@/app/common/hooks/useAuth';

const minimumCreditLimit = process.env.NEXT_PUBLIC_MINIMUM_CREDIT_LIMIT;


const BottomNotification = () => {
  const { user } = useContext(userContext);
  const {isLoggedIn} = useAuth();
  const [show, setShow] = useState(localStorage.getItem('showLowCreditBanner') === 'true');

  const handleClose = () => {
    localStorage.setItem('showLowCreditBanner', "false");
    setShow(false)
  }

  useEffect(() => {
    if (isLoggedIn && localStorage.getItem('showLowCreditBanner') !== 'false' && user?.credits <= minimumCreditLimit) {
      setShow(true);
      localStorage.setItem('showLowCreditBanner', "true");
    }
  }, [user?.credits, isLoggedIn])
  
  if (user?.credits > minimumCreditLimit || !show) return null;
  return (
    <div className='bottom-notification'>
        <TbAlertTriangleFilled />
        <h3 className='m-0'>Your AI credits are low! Enhance your experience, recharge now for seamless AI generation</h3>

        <div className='actions'>
            <Link href="/pricing">Buy Now</Link>
            <span className='divider'></span>
            <button className='btn' onClick={handleClose}><IoClose /></button>
        </div>
    </div>
  )
}

export default BottomNotification