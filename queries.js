const pool = require('./db');

async function getAllDepartments() {
    try {
        const [rows] = await pool.query('SELECT * FROM departments');
        return rows;
    } catch (error) {
        throw error;
    }
}

async function addDepartment (name) {
    try {
        await pool.query('INSERT INTO department (name) VALUES (?)' , [name]);
    } catch (error) {
        throw error;
    }
}

async function getAllRoles() {
    try {
        const [rows] = await pool.query('SELECT * FROM role');
        return rows;
    } catch (error) {
        throw error;
    }
}

async function addRole(title, salary, departmentId) {
    try {
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    } catch (error) {
        throw error;
    }
}

async function getAllEmployees() {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        return rows;
    } catch (error) {
        throw error;
    }
}

async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    } catch (error) {
        throw error;
    }
}

async function updateEmployeeRole(employeeId, newRoleId) {
    try {
        await pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllDepartments,
    addDepartment,
    getAllRoles,
    addRole,
    getAllEmployees,
    addEmployee,
    updateEmployeeRole
};

