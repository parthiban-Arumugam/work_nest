import React, { useState } from 'react'
import api from "../api/EmployeeDb"

const AddEmployee = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    department: '',
    salary: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const response = await api.post('',formData)
         if (response.status === 201 || response.status === 200) {
            alert('Employee added successfully!');
            
    }

  }catch(err){
        console.log(err.message)
    }
};
  return (
<>
    
    <tr>
        <td>Id</td>
      <td>
        <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Name" />
      </td>
      <td>
        <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder="example@gmail.com" />
      </td>
      <td>
        <input type="text" name='designation' value={formData.designation} onChange={handleChange} placeholder="Ex: Software Developer" />
      </td>
      <td>
        <input type="text" name='department' value={formData.department} onChange={handleChange} placeholder="Ex: IT" />
      </td>
      <td>
        <input type="number" name='salary' value={formData.salary} onChange={handleChange} placeholder="Salary" />
      </td>
               
</tr>
     
   <button onClick={handleSubmit}>add</button>
 
</>
)
}

export default AddEmployee