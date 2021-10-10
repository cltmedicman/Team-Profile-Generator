const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const engineerArr = [];
const internArr = [];

function init() {
    const teamManager = AddManager();

    const confirm = AddEmployee();

    while (confirm) {
        inquirer.prompt([
            {
                name: 'employeeType',
                type: 'list',
                message: 'What type of employee would you like to add?',
                choices: [ "Engineer", "Intern" ]
            }
        ])
        .then((answer) => {
            if (answer.employeeType === "Engineer") {
                let teamEngineer = AddEngineer();
                engineerArr.push(teamEngineer);
            } else {
                let teamIntern = AddIntern();
                internArr.push(teamIntern);
            }
        })
        confirm = AddEmployee();
    }
    console.log(teamManager);
    console.log(engineerArr);
    console.log(internArr);
}

function AddManager () {
    const managerQuestions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the team manager?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the team manager\'s employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the team manager\'s email address?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the team manager\'s office number?'
        }
    ];
    inquirer.prompt(managerQuestions)

    .then((managerAnswers) => {
        const teamManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        return teamManager;
    });
}

function AddEmployee() {
    inquirer.prompt([
        {
            name: 'continue',
            type: 'confirm',
            message: 'Would you like to add another employee?'
        }
    ])

    .then((answer) => {
        let confirm = answer.continue;
        return confirm;
    })
}

function AddEngineer() {
    const engineerQuestions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the engineer?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the engineer\'s employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineer\'s email address?'
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the engineer\'s GitHub username?'
        }
    ]
    inquirer.prompt(engineerQuestions)

    .then((engineerAnswers) => {
        const teamEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        return teamEngineer;
    })
}

function AddIntern() {
    const internQuestions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the intern?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the intern\'s employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the intern\'s email address?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'What school does the intern attend?'
        }
    ]
    inquirer.prompt(internQuestions)

    .then((internAnswers) => {
        const teamIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        return teamIntern;
    })
}

init();