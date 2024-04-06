#! /usr/bin/env node

import inquirer from 'inquirer';

// creation of CLI ATM machine

let orignalpin = 5161

let balance = 25000

let pin = await inquirer.prompt(

    [

        {
            name: "atmpin",
            message: "enter your pin",
            type:"number"
        }
    ]
);

switch (pin.atmpin) 
{
    case orignalpin:

    let select = await inquirer.prompt(
        [
            {
                name : "option",
                message : "choose the desired option",
                type : "list",
                choices : [ "check Balance" , "withdrawl" ]
            }
        ]
    );

    switch (select.option)
    {
        case "withdrawl":

        let amount = await inquirer.prompt
        (
            [
                {
                    name : "withdrawl_Amount",
                    message : "Enter the amount to withdraw",
                    type : "number"
                }
            ]

        );

        if ( amount.withdrawl_Amount <= balance)
            {

                balance = balance - amount.withdrawl_Amount

                console.log("withdrawl Amount:" , amount.withdrawl_Amount);

                console.log("your current balance is Rs." , balance);

            }
            
            else

            console.log("please enter the amount under" , balance);

            break;

            default:
                console.log("your current balance is Rs." , balance);
                break;
        }

        break;

        default:

        console.log("your pin is incorrect");

        break;
}


