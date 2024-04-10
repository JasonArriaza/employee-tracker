const inquirer = require('inquirer');
const {
    getAllDepartments,
    addDepartment,
    getAllRoles,
    addRole,
    getAllEmployees,
    addEmployee,
    updateEmployeeRole
} = require('./queries');

//funtion to view all of the departments
async function viewAllDepartments() {
    try {
        const departments = await getAllDepartments();
        console.table(departments);
    } catch (error) {
        console.error('Error viewing departments:', error);
    }
}
 //function to add a new department
 async function addNewDepartment() {
    try {
        const { name } = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter the name of the new department:'
        });
        
        await addDepartment(name);
        console.log('Department added successfully!');
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

//function to view all roles
async function viewAllRoles() {
    try {
        const roles = await getAllRoles();
        console.table(roles);
    } catch (error) {
        console.error('Error viewing roles:', error);
    }
}

//function to add a role
async function addNewRole() {
    try {
        const { title, salary, departmentId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the new role:'
            },
            {
                type: 'number',
                name: 'salary',
                message: 'Enter the salary for the new role:'
            },
            {
                type: 'number',
                name: 'departmentId',
                message: 'Enter the department ID for the new role:'
            }
        ]);
        
        await addRole(title, salary, departmentId);
        console.log('Role added successfully!');
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

// function to view all employees
async function viewAllEmployees() {
    try {
        const employees = await getAllEmployees();
        console.table(employees);
    } catch (error) {
        console.error('Error viewing employees:', error);
    }
}

//function to add an employee
async function addNewEmployee() {
    try {
        const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the new employee:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the new employee:'
            },
            {
                type: 'number',
                name: 'roleId',
                message: 'Enter the role ID for the new employee:'
            },
            {
                type: 'number',
                name: 'managerId',
                message: 'Enter the manager ID for the new employee (if applicable):'
            }
        ]);
        
        await addEmployee(firstName, lastName, roleId, managerId);
        console.log('Employee added successfully!');
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

//function to update an employee
async function updateEmployeeRoleDB() {
    try {
        const { employeeId, newRoleId } = await inquirer.prompt([
            {
                type: 'number',
                name: 'employeeId',
                message: 'Enter the ID of the employee to update:'
            },
            {
                type: 'number',
                name: 'newRoleId',
                message: 'Enter the new role ID for the employee:'
            }
        ]);
        
        await updateEmployeeRole(employeeId, newRoleId);
        console.log('Employee role updated successfully!');
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
}



async function mainMenu() {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'Add a department',
            'View all roles',
            'Add a role',
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (choice) {
        case 'View all departments':
            await viewAllDepartments();
            break;
        case 'Add a department':
            await addNewDepartment();
            break;
        case 'View all roles':
            await viewAllRoles();
            break;
        case 'Add a role':
            await addNewRole();
            break;
        case 'View all employees':
            await viewAllEmployees();
            break;
        case 'Add an employee':
            await addNewEmployee();
            break;
        case 'Update an employee role':
            await updateEmployeeRoleDB();
            break;
        case 'Exit':
            console.log('Exiting...');
            return;
    }
}

async function startApp() {
    console.log('Welcome to the Employee Tracker!');
    while (true) {
        await mainMenu();
    }
}

startApp();
