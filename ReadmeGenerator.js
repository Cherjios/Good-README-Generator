const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "Username"
    },
    {
      type: "input",
      message: "What is your Repository Title?",
      name: "RepositoryTitle"
    },
    {
      type: "input",
      message: "What is your Repository Description?",
      name: "RepositoryDescription"
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
  ]);
}

function generateHTML(answers) {
  return `
  [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)

# ${answers.RepositoryTitle}
${answers.RepositoryDescription}

##  Table of Contents
- [Installation](##Installation)
- [Usage](##Usage)
- [License](##License)
- [Contributing](##Contributing)
- [Tests](##Tests)
- [Questions](##Questions)

##  Installation
\`\`\`
${answers.Installation}
\`\`\`

## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contribution}

##  Tests
${answers.Test}

## Questions
    - [${answers.Username}](https://github.com/${answers.Username})`;
}

async function init() {
  try {
    const answers = await promptUser();

    const READMEFile = generateHTML(answers);

    await writeFileAsync("README.md", READMEFile );

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
}

init();


