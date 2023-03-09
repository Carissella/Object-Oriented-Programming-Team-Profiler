const inquirer = require("inquirer");
const fs = require ("fs"); 
// fs = FileSystem
const path = require("path");

const generateTeams = require();

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const teamsMembers = [];

function startApp() {
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter a team manager's name",
                validate: (answer) => {
                    if (answer === "") {
                        return "A manager's name is required to be entered.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the manager's Id",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid Id for the manager.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the manager's email",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid email for the manager.";
                    } else if (!answer.includes("@")) {
                        return "Please enter a valid email that contains an '@' symbol for the manager.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter the manager's office number",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid office number for the manager.";
                    }
                    return true;
                },
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );
            teamsMembers.push(manager);
            addMoreEmployees();
        });
    }

    function addMoreEmployees() {
        inquirer.prompt([ {
            type: "list",
            name: "addMoreEmploy",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No thank you, finish this team"],
            },
        ])
        .then((answer) => {
            switch (answer.addMoreEmploy) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                makeHTML(teamsMembers);
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter a engineer's name.",
                validate: (answer) => {
                    if (answer === "") {
                        return "A engineer's name is required to be entered.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's id.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid Id for the engineer.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid email for the engineer.";
                    } else if (!answer.includes("@")) {
                        return "Please enter a valid email that contains an '@' symbol for the engineer.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the engineer's Github username.",
                validate: (answer) => {
                    if(asnwer === "") {
                        return "Please enter a valid Github username for the engineer.";
                    }
                    return true;
                },
            },
        ])
        .then((asnwers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamsMembers.push(engineer);
            addMoreEmployees();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter the intern's name.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a name for the intern";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter the intern's Id.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid Id for the intern.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter an email for the intern.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid email.";
                    } else if (!answer.includes("@")) {
                        return "{Please enter a valid email that contains an '@' symbol for the intern.";
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the school the intern attends.",
                validate: (answer) => {
                    if (answer === "") {
                        return "Please enter a valid school for the intern.";
                    }
                    return true;
                },
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            teamsMembers.push(intern);
            addMoreEmployees();
        });
    }
    
    function makeHTML() {
        console.log("Team has been generated!")
        fs.writeFileSync()
    }

    addManager();
};

startApp();