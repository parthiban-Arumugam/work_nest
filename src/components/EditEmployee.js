import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/EmployeeDb';

const EditEmployee = ({ employees, setEmployee, fetchEmp }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    designation: '',
    department: '',
    salary: ''
  });

  useEffect(() => {
    const emp = employees.find((e) => e.id.toString() === id);
    if (emp){
         setForm(emp);
    }else {
    const fetchSingle = async () => {
      try {
        const res = await api.get(`/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error("Error fetching employee:", err);
      }
    };
    fetchSingle();
  }
  }, [id, employees]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/${id}`, form);
      const updatedList = employees.map((emp) =>
        emp.id.toString() === id ? response.data : emp
      );
      setEmployee(updatedList);
      fetchEmp();
      navigate('/employees');
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="p-4 bg-yellow-100 rounded shadow max-w-md mx-auto mt-4">
      <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
      {['name', 'email', 'designation', 'department', 'salary'].map((field) => (
        <input
          key={field}
          name={field}
          type={field === 'salary' ? 'number' : 'text'}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="block w-full border p-2 mb-3 rounded"
          required
        />
      ))}
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        <button type="button" onClick={() => navigate('/employees')} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditEmployee;
