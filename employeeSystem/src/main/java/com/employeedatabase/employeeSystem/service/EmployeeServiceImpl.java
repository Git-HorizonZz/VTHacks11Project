package com.employeedatabase.employeeSystem.service;

import com.employeedatabase.employeeSystem.model.Employee;
import com.employeedatabase.employeeSystem.repository.EmployeeRespoitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRespoitory employeeRespoitory;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRespoitory.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRespoitory.findAll();
    }

    @Override
    public void deleteEmployee(Employee employee) {
        employeeRespoitory.deleteById(employee.getId());
    }

}
