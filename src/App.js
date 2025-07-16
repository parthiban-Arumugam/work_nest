import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import api from "./api/EmployeeDb"
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import DashboardLayout from "./components/layout/DashboardLayout";


function App() {
  const[employee, setEmployee]= useState([]);
  const [addEmp,setEmp]= useState (false);


  useEffect(() => {
    const fetchEmp = async () =>{
      try{
        const response = await api.get('');
        setEmployee(response.data);
      }catch(err){
        if(err.response){
          console.log(err.response.status);
        }else{
          console.log(`Error :${err.message}`);
        }
      }
    }
  fetchEmp();
},[])

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <h2>Welcome to Admin Dashboard</h2>
            </DashboardLayout>
          }
        />
        <Route
          path="/employees"
          element={
            <DashboardLayout>
              <Employee
                employees={employee}
                setEmployee={setEmployee}
              />
            </DashboardLayout>
          }
        />
        <Route
          path="/add"
          element={
            <DashboardLayout>
              <AddEmployee setEmployee={setEmployee} />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
