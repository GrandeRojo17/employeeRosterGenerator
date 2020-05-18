const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let team = [];

const questions = [
  {
    type: "list",
    name: "position",
    message: `What position are you adding?`,
    choices: ["Manager", "Engineer", "Intern", "End"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their employee ID number?",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is their employee office number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "github",
    message: "input: github?",
  },
  {
    type: "input",
    name: "school",
    message: "What school did they attend?",
  },
];
const employeeAdd = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "add",
        message: "Would You Like To Add Another Employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then(function (res) {
      if (res.add === "Yes") {
        init();
      } else {
        console.log("We have created your roster. :)");
      }
    });
};
// Write code to use inquirer to gather information about the development team members,

function init() {
  inquirer.prompt(questions).then((answers) => {
    switch (answers.position) {
      case "Manager":
        team.push(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNum
          )
        );
        employeeAdd();
        break;
      case "Intern":
        team.push(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
        employeeAdd();
        break;
      case "Engineer":
        team.push(
          new Engineer(answers.name, answers.id, answers.email, answers.github)
        );
        employeeAdd();
        break;
      case "End":
        console.log("You have ended the program :(");
        break;
      default:
        break;
    }
    fs.writeFile("team.html", render(team), () => {
      console.log("we found you");
    });
  });
}

init();
