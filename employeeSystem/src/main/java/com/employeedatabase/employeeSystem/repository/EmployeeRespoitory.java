package com.employeedatabase.employeeSystem.repository;

import com.employeedatabase.employeeSystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRespoitory extends JpaRepository<Employee, Integer> {

}
