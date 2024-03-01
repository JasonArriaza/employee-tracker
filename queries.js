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

module.exports = {
    getAllDepartments,
    addDepartment
};