-- DEPT (NAME )
INSERT INTO department (name)
VALUES ("Marketing"),
       ("Finance "),
       ("Human Resources"), 
       ("IT"), 
       ("Engineering"),
       ("Quality Assurance"),
       ("Customer Service");

-- ROLE     (TITLE, SALARY, DEPT_ID)

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Director", 1000000, 1),
       ("Finance Director", 1100000, 2),
       ("HR Director", 700000, 3),
       ("IT Director", 900000, 4),
       ("Engineering Director", 1150000, 5),
       ("QA Director", 650000, 6),
       ("CS Director", 500000, 7),
       ("Marketing Manager", 70000, 1),
       ("Accountant", 100000, 2),
       ("Head of Recruitment", 75000, 3),
       ("Technical Support", 123000, 4),
       ("Engineer", 117000, 5),
       ("Representative", 80000, 6),
       ("Assistant", 40000, 7),
       ("CS Manager", 60000, 7);

-- EMPLOYEE (FIRST NAME, LAST NAME , ROLE, MANAGER (COULD BE NULL))

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Juju", "Beans",  1, NULL),
       ("Abby", "Banana"  2, NULL),
       ("Julia", "Boolia", 3, NULL),
       ("Sammy", "Bammy"  4, NULL),
       ("Collin", "Bean",  5, NULL),
       ("Patty", "Matty"  6, NULL),
       ("Henry", "Frienly",  7, NULL),
       ("Daniel", "Baniel"  8, 1),
       ("Jon", "Snell", 9 , 2),
       ("Matt", "Kahan"  10, 3),
       ("Adi", "Horton"  11, 4),
       ("Jelly", "Belly",  12, 5),
       ("Drake", "Kaasab"  13, 6),
       ("Gavin", "Bavin",  14, 7),
       ("Ryker", "Biker"  15, 7),
       ("Harry", "Styles",  8, 1),
       ("Chris", "Evans"  9, 1),
       