var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      choices:[ "HTML", "CSS", "JavaScript", "Python"],
      name: "Languages"
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "preferred method"
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