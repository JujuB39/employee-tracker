import mysql from 'mysql2';
import inquirer from 'inquirer';
import cTable  from 'console.table';

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
        const [results] = await db.promise().query('SELECT * FROM department')
        console.table(results)
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const viewAllRoles = async () => {
    try{
        const [results] = await db.promise().query('SELECT * FROM role')
       console.table(results)
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const viewAllEmployees = async () => {
    try{
        const [results] = await db.promise().query('SELECT * FROM employee')
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
            name: "department",
            message: "What is the name of the department: "
        }
    ])

    try{
        const [results] = await db.promise().query('INSERT INTO department (department) VALUES (?)', response.department)
       console.log("Department added successfully!")
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
            type: "list",
            name: "department_id",
            message: "What department does this role belong to:",
            choices: res.map(department => department.department)
        }
    ])

    try{
        const [results] = await db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [response.title, response.salary, response.department_id])
       console.log("Role information added successfully!")
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
            type: "list",
            name: "role_id",
            message: "Please provide the role for this employee:",
            choices: res.map(role => role.title)
        },  {
            type: "list",
            name: "manager",
            message: "Who is the employees Manager: ",
            choices: res.map(employee => [employee.firstName, employee.lastName])
        }
    ])

    try{
        const [results] = await db.promise().query('INSERT INTO employee (firstName, lastName, role_id, manager) VALUES (?, ?, ?, ?)', response.firstName, response.lastName, response.role_id, response.manager)
       console.log("Employee information added successfully!")
        menuPrompt()
    } catch(err) {
        throw new Error(err)
    }
};

const menuPrompt = async () => {
    const response = await inquirer.prompt([
        {
            type: "list",
            name: "dashboard",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Exit"]
        }
    ]);
    if (response.dashboard === "View all Departments") {
        viewAllDepartments()
    } else if (response.dashboard === "View all Roles") {
        viewAllRoles()
    } else if (response.dashboard === "View all Employees") {
        viewAllEmployees()
    } else if (response.dashboard === "Add a Department") {
        addDepartment()
    } else if (response.dashboard === "Add a Role") {
        addRole()
    } else if (response.dashboard === "Add an Employee") {
        addEmployee()
    } else {
        process.exit(0)
    }
}

menuPrompt()
