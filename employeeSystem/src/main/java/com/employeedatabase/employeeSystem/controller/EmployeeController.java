package com.employeedatabase.employeeSystem.controller;

import com.employeedatabase.employeeSystem.model.Employee;
import com.employeedatabase.employeeSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "New employee was added";
    }

    @GetMapping("/getAll")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/delete")
    public String delete(@RequestBody Employee employee) {
        employeeService.deleteEmployee(employee);
        return "Employee was deleted";
    }
}
