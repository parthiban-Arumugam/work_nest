import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({children}) => {
  return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
