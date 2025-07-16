import React from 'react'
import AddEmployee from './AddEmployee'

const Employee = ({employees, setEmp, addEmp}) => {
    
    
  return (
    <>
    <h1>Employee list</h1>
           <button onClick={() => setEmp(!addEmp)}>Add employes</button> 
    <table border="1" cellPadding="8" cellSpacing="0" >
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>designation</th>
          <th>department</th>
          <th>salary</th>
        </tr>
      </thead>
      <tbody>
        {addEmp && <AddEmployee />}
        {employees.map((emp) =>(
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.designation}</td>
          <td>{emp.department}</td>
          <td>{emp.salary}</td>

        </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Employee