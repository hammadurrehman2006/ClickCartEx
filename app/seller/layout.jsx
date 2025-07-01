'use client'
import Navbar from '@/app/cart/components/seller/Navbar'
import Sidebar from '@/app/cart/components/seller/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout