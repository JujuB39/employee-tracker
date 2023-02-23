const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const cTable = require('console.table')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'iAmRoot39',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
);

const viewAllDepartments = async () => {
    try{
    const [results] = await connection.promise().query('Select * FROM department')
    console.table(results)
    menuPrompt()
} catch(err) {
    throw new Error(err)
}
}

const viewAllRoles

const viewAllEmployees

const addDepartment

const addRole

const addEmployee

const updateEmployee

//view all depts
//view all roles 
//view all employees
//add dept 
//add role 
//add employee 
//update employee
