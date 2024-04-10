DELETE FROM employee;
DELETE FROM role;
DELETE FROM department;



INSERT INTO department (department_name) VALUES
    ('Engineering'),
    ('Marketing'),
    ('Sales'),
    ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 80000, 1),
    ('Web Developer', 70000, 1),
    ('Marketing Manager', 90000, 2),
    ('Sales Representative', 60000, 3),
    ('Financial Analyst', 85000, 4),
    ('Accountant', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mike', 'Johnson', 3, NULL),
    ('Emily', 'Brown', 4, 3),
    ('David', 'Wilson', 1, 1),
    ('Sarah', 'Jones', 5, NULL),
    ('Chris', 'Davis', 6, 5),
    ('Rachel', 'Taylor', 3, NULL),
    ('Michael', 'Clark', 4, 3),
    ('Emma', 'Martinez', 1, 1);

