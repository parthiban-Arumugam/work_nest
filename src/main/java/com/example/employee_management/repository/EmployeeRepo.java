package com.example.employee_management.repository;

import com.example.employee_management.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

    @Query("SELECT DISTINCT e FROM Employee e LEFT JOIN FETCH e.skills")
    List<Employee> findAllWithSkills();
}
