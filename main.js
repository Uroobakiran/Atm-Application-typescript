#!usr/bin/env node
import inquirer from "inquirer";
let myBalance = 500000;
let myPin = 2244;
let user = await inquirer.prompt([
    { name: "Urooba kiran",
        type: "string",
        message: "welcome to Mezan Bank"
    }
]);
let pinAnswer = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "enter your 4 digit pin code"
    }
]);
if (pinAnswer.pincode === myPin) {
    console.log("correct pin code!!!");
    let accountTypeAnswer = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            message: "select your accout type",
            choices: ["current", "saving"]
        },
        {
            name: "transaction",
            type: "list",
            message: "please select option",
            choices: ["cash withdraw", "fast cash", "check balance"],
        }
    ]);
    if (accountTypeAnswer.transaction === "cash withdraw") {
        let cashWithdrawamount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (myBalance >= cashWithdrawamount.amount) {
            myBalance -= cashWithdrawamount.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else
            (console.log(`Insufficient Balance`));
    }
    else if (accountTypeAnswer.transaction === "fast cash") {
        let fastCashamount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "select your amount",
                choices: [10000, 20000, 30000, 40000, 50000]
            }
        ]);
        if (myBalance >= fastCashamount.fastCash) {
            myBalance -= fastCashamount.fastcash;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else
            (console.log(`Insufficient Balance`));
    }
    else
        (accountTypeAnswer.transaction === "check balance");
    {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
