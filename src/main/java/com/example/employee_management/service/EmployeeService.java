package com.example.employee_management.service;

import com.example.employee_management.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employee_management.repository.EmployeeRepo;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepo empRepo;

    public List<Employee> getAllemployees() {
        return empRepo.findAllWithSkills();
    }

    public Employee AddEmployee(Employee employee) {
        if (employee.getSkills() != null) {
            employee.getSkills().forEach(skill -> skill.setEmployee(employee));
        }
        return  empRepo.save(employee);
    }

    public void DeleteEmployee(Integer id) {
        empRepo.deleteById(id);
    }

    public Employee UpdateEmployee(Integer id, Employee updatedemployee) {
        Employee existingEmployee = empRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        existingEmployee.setName(updatedemployee.getName());
        existingEmployee.setEmail(updatedemployee.getEmail());
        existingEmployee.setDepartment(updatedemployee.getDepartment());
        existingEmployee.setDesignation(updatedemployee.getDesignation());
        existingEmployee.setSalary(updatedemployee.getSalary());

        existingEmployee.getSkills().clear();
        if (updatedemployee.getSkills() != null) {
            updatedemployee.getSkills().forEach(skill -> {
                skill.setEmployee(existingEmployee);
                existingEmployee.getSkills().add(skill);
            });
        }

        return empRepo.save(existingEmployee);
    }
}
