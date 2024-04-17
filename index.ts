#! /usr/bin/env node

import inquirer from "inquirer"

// This is word counter code.
const Para = await inquirer.prompt(
    {
    name: "sentence",
    type: "input",
    message: "Write your sentence and count your sentence words:"
});

const wordCounter = Para.sentence.trim().split(" ");
console.log(wordCounter);

console.log(`your sentence word count is ${wordCounter.length}`);
