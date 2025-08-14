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
    salary: '',
    skills: [] // ✅ store skills here
  });

  useEffect(() => {
    const emp = employees.find((e) => e.id.toString() === id);
    if (emp) {
      setForm(emp);
    } else {
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

  // ✅ Handle skill change
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...form.skills];
    updatedSkills[index].name = value;
    setForm({ ...form, skills: updatedSkills });
  };

  // ✅ Add a new skill row
  const addSkill = () => {
    setForm({ ...form, skills: [...form.skills, { name: '' }] });
  };

  // ✅ Remove a skill row
  const removeSkill = (index) => {
    const updatedSkills = form.skills.filter((_, i) => i !== index);
    setForm({ ...form, skills: updatedSkills });
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
    <form onSubmit={handleUpdate} className="p-4 bg-white rounded shadow max-w-md mx-5 mt-4 font-semibold text-gray-800 ">
      <h2 className="text-lg mb-4">Edit Employee</h2>

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

      {/* ✅ Skills Section */}
      <h3 className="text-md mb-2 mt-4">Skills</h3>
      {form.skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Skill name"
            value={skill.name}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={() => removeSkill(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-green-500 text-white px-3 py-1 rounded mb-3"
      >
        + Add Skill
      </button>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        <button type="button" onClick={() => navigate('/employees')} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditEmployee;
