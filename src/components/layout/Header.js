import React from 'react'
import { MdAutoGraph } from "react-icons/md";


const Header = () => {
  return (
    <div className="bg-white shadow h-10 w-full fixed top-0 left-0 z-20 flex items-center px-4 ">
      <h1 className="text-xl font-semibold flex items-center gap-2">WorkNest <MdAutoGraph /></h1>
    </div>
  )
}

export default Header