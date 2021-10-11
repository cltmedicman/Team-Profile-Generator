const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml.js");

let engineerArr = [];
let internArr = [];
let teamManager = [];

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
        teamManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        //console.log(teamManager);
        AddEmployee();
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
        if (confirm) {
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
                    AddEngineer();
                } else {
                    AddIntern();
                }
            })
        } else {
            const htmlGenerate = generateHtml(teamManager, engineerArr, internArr);
            writeToFile('./dist/Team.html', htmlGenerate);
        }
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
        let teamEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        engineerArr.push(teamEngineer);
        //console.log(engineerArr);
        AddEmployee();
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
        let teamIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        internArr.push(teamIntern);
        //console.log(internArr);
        AddEmployee();
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('File written successfully!')
        }
    })
}

AddManager();