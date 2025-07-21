import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdOutlineGroups3 } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";



const Sidebar = () => {
  return (
    <aside className="w-40 h-screen bg-white text-gray-800 shadow p-4 fixed top-10 left-0 z-10 text-xs">
      <nav className="flex flex-col space-y-4 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-3 py-2 rounded'
              : 'hover:text-gray-700'
          }
        >
          Dashboard <MdOutlineDashboard />
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-3 py-2 rounded'
              : 'hover:text-gray-700'
          }
        >
          Employees <MdOutlineGroups3 />
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-800 text-white px-2 py-2  rounded'
              : 'hover:text-gray-700'
          }
        >
          Add Employee<MdGroupAdd />
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
