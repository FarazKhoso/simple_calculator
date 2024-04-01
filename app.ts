import { log } from "console";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "plz enter the first number", type: "number", name: "firstNumber" },
  {
    message: "plz enter the second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "plz salect you operator",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "divison"],
  },
]);


if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
    
} 
else if (answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "divison"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("plz salect alid operator");
    
}


