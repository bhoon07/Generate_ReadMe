// array of questions for user
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your work called?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "communication"
    },
    {
    type: "input",
    message: "How do you acces the node?",
    name: "node"
    },
    {
      type: "input",
      message: "What is the description for this use?",
      name: "description"
    }
  ])
  .then(function(questions) {

    const fs = require("fs");

    fs.writeFile("README.md", JSON.stringify(questions, null, 2) + "\n", function(err) {
        if (err) throw err;

        console.log("Thank You, goodbye")
        });
});
// function to write README file



// function to initialize program
function init() {

}

// function call to initialize program
init();
