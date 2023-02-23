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
        const [results] = await connection.promise().query('SELECT * FROM department')
        console.table(results)
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const viewAllRoles = async () => {
    try{
        const [results] = await connection.promise().query('SELECT * FROM role')
        console.table(results)
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const viewAllEmployees = async () => {
    try{
        const [results] = await connection.promise().query('SELECT * FROM employee')
        console.table(results)
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const addDepartment = async () => {
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "What is the name of the department: "
        }
    ])

    try{
        const [results] = await connection.promise().query('INSERT INTO department (deptName) VALUES (?)', response.deptName)
        console.table("Department added successfully!")
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const addRole = async () => {
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter the name of the Role: "
        }, {
            type: "input",
            name: "salary",
            message: "Please enter the Salary for the role: "
        }, {
            type: "input",
            name: "department_id",
            message: "Please provide the department Id for the role:"
        }
    ])

    try{
        const [results] = await connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [response.title, response.salary, response.department_id])
        console.table("Role information added successfully!")
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const addEmployee = async () => {
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Please enter employees's first Name: "
        },  {
            type: "input",
            name: "lastName",
            message: "Please enter employees Last name: "
        }, {
            type: "input",
            name: "role_id",
            message: "Please provide the role Id for this employee:"
        },  {
            type: "input",
            name: "manager",
            message: "Who is the employees Manager: "
        }
    ])

    try{
        const [results] = await connection.promise().query('INSERT INTO employee (firstName, lastName, role_id, manager) VALUES (?, ?, ?, ?)', response.firstName, response.lastName, response.role_id, response.manager)
        console.table("Employee information added successfully!")
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};
