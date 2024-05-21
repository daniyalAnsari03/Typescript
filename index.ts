#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
        {
            message: "Enter your first number",
            type: "number",
            name: "firstNumber",
        },
        {
            message: "Enter your second number",
            type: "number",
            name: "secondNumber"
        },
        {
            name: "operator",
            message: "select one the operator perform the operation",
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]
);

if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
