'use client'
import Navbar from '@/app/components/seller/Navbar'
import Sidebar from '@/app/components/seller/Sidebar'


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