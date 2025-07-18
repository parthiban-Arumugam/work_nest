import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({children}) => {
  return (

    <>
    <Header />

      <div className="flex pt-10"> {/* space for fixed header */}
        <Sidebar />

        <main className="ml-40 p-6 w-full min-h-screen bg-gray-100">
          {children}
        </main>
    </div>
    </>
  )
}

export default DashboardLayout
