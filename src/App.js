// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import api from "./api/EmployeeDb";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import EditEmployeeForm from "./components/EditEmployee";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./components/DashboardHome";
import Login from "./components/Login";

function App() {
  const [employee, setEmployee] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const fetchEmp = async () => {
    try {
      const response = await api.get('');
      setEmployee(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchEmp();
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Dashboard Home */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <DashboardHome employees={employee} />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Employee List */}
        <Route
          path="/employees"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <Employee
                  employees={employee}
                  setEmployee={setEmployee}
                  fetchEmp={fetchEmp}
                />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Add Employee */}
        <Route
          path="/add"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <AddEmployee
                  setEmployee={setEmployee}
                  fetchEmp={fetchEmp}
                />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Edit Employee */}
        <Route
          path="/edit/:id"
          element={
            isLoggedIn ? (
              <DashboardLayout>
                <EditEmployeeForm
                  employees={employee}
                  setEmployee={setEmployee}
                  fetchEmp={fetchEmp}
                />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
        />

      </Routes>
    </Router>
  );
}

export default App;
