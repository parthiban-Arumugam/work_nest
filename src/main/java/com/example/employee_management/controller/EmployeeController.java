package com.example.employee_management.controller;

import com.example.employee_management.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.employee_management.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping
public class EmployeeController {
    @Autowired
    private EmployeeService empService;

    @GetMapping
    public List<Employee> getAllEmployee(){
        return empService.getAllemployees();
    }

    @PostMapping
    public Employee AddEmployee(@RequestBody Employee employee){
        return empService.AddEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public void  DeleteEmployee(@PathVariable Integer id){
        empService.DeleteEmployee(id);

    }

    @PutMapping("/{id}")
    public Employee UpdateEmployee(@PathVariable Integer id, @RequestBody Employee updatedemployee){
        return empService.UpdateEmployee(id,updatedemployee);
    }
}
