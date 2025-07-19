import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import api from "./api/EmployeeDb"
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import EditEmployeeForm from "./components/EditEmployee";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./components/DashboardHome";


function App() {
  const[employee, setEmployee]= useState([]);

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
    };
    useEffect(() => {
        fetchEmp();
},[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout>
    <DashboardHome employees={employee} />
  </DashboardLayout>} />
        <Route path="/employees" element={
          <DashboardLayout >
          <Employee
                employees={employee}
                setEmployee={setEmployee}
                fetchEmp ={fetchEmp} /> </DashboardLayout> } />
        <Route path="/add" element={
          <DashboardLayout>
              <AddEmployee 
                      setEmployee={setEmployee}
                      fetchEmp ={fetchEmp} /> </DashboardLayout>}/>

        <Route path="/edit/:id" element={
            <DashboardLayout>
            <EditEmployeeForm 
             employees={employee} 
              setEmployee={setEmployee}
              fetchEmp ={fetchEmp} />
              </DashboardLayout>
} />
      </Routes>
    </Router>
  );
}

export default App;
