package com.employeedatabase.employeeSystem.service;

import com.employeedatabase.employeeSystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);

    public List<Employee> getAllEmployees();

    public void deleteEmployee(Employee employee);
}
