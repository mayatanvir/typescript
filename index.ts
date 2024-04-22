#! /usr/bin/env node

// importing inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk";

// display a colourfull wellcome message
console.log(chalk.bold.yellowBright("\n \t\t Code With Maya - Word Counter"));
console.log("=". repeat(70) );

// prompt the user to enter a sentence 
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Triming the sentence and splitting it into word based on "spaces"

let words = answers.sentence.trim().split(" ");

// Analysis of  user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count:${chalk.bold.greenBright (words.length)}`));
console.log("=".repeat(70));