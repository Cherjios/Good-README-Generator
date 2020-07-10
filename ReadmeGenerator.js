var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "Username"
    },
    {
      type: "input",
      message: "What is your Repository Title?",
      name: "Repository Title"
    },
    {
      type: "input",
      message: "What is your Repository Description?",
      name: "Repository Description"
    },
    {
      type: "input",
      message: "Installation process?",
      name: "Installation"
    },
    {
      type: "input",
      message: "Usage?",
      name: "Usage"
    },
    {
      type: "input",
      message: "License?",
      name: "License"
    },
    {
      type: "input",
      message: "Contributing?",
      name: "Contribution"
    },
    {
      type: "input",
      message: "Test?",
      name: "Test"
    },
    {
      type: "input",
      message: "Questions?",
      name: "Questions"
    }
  ])
  .then(function(response) {
    console.log(response)

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }

    var fs = require("fs");
    fs.writeFile("response.json", JSON.stringify(response, null,"\t") + "\n", function(err) {

    if (err) {
      return console.log(err);
    }
  
  });

  });