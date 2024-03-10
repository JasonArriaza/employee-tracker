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
        console.log('View all departments is now working!')
            break;
        case 'Add a department':
        console.log('Add a departments is now working!')
            break;
        case 'View all roles':
        console.log('View all roles is now working!')
            break;
        case 'Add a role':
        console.log('Add a role is now working!')
            break;
        case 'View all employees':
        console.log('View all employees is now working!')
            break;
        case 'Add an employee':
        console.log('Add an employee is now working!')
            break;
        case 'Update an employee role':
        console.log('Update an employee is now working is now working!')
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
