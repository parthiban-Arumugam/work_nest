import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({children}) => {
  return (

    <>
    <Header />

      <div className="flex pt-10"> 
        <Sidebar />

        <main className="ml-40 p-3 w-full min-h-screen bg-gray-100">
          {children}
        </main>
    </div>
    </>
  )
}

export default DashboardLayout
