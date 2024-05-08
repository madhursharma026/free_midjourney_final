'use client'
import React, { ReactNode, useEffect } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './components/UserContextProvider';
import { useRouter } from 'next/navigation';
import { axiosServiceInit } from '@/utils/axios';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = ({children}: {children: ReactNode}) => {
  const router = useRouter();
  
  useEffect(() => {
    axiosServiceInit(router);
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <UserContextProvider>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </UserContextProvider>
    </GoogleOAuthProvider>
  )
}

export default App
