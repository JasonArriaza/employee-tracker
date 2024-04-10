-- Retrieve all departments
SELECT * FROM department;

-- Retrieve all roles
SELECT * FROM role;

-- Retrieve all employees
SELECT * FROM employee;

-- Insert a new department
INSERT INTO department (name) VALUES ('New Department');

-- Insert a new role
INSERT INTO role (title, salary, department_id) VALUES ('New Role', 50000, 1);

-- Insert a new employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);

-- Update an employee's role
UPDATE employee SET role_id = 2 WHERE id = 1;

-- Delete a department
DELETE FROM department WHERE id = 1;

-- Delete a role
DELETE FROM role WHERE id = 1;

-- Delete an employee
DELETE FROM employee WHERE id = 1;
