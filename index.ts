import inquirer from'inquirer';

const theAnswer=await inquirer.prompt([
    {name:"firstnumber",
     type:"number",
     message:"enter your first number"},

    {name:"secondnumber",
    type:"number",
    message:"enter your second number"},

     {
    name:"tools",
     type:"list",
     choices:["addition","subtraction","multiplication","division"],
     message:"enter the correct tool to perform the calculation"
    }
])

//apply condiotional mstatements for certain actions
if(theAnswer.tools==="addition"){[
    console.log(theAnswer.firstnumber + theAnswer.secondnumber)
]}
else if(theAnswer.tools==="subtraction"){[
    console.log(theAnswer.firstnumber - theAnswer.secondnumber)
]}
else if(theAnswer==="multiplication"){[
    console.log(theAnswer.firstnumber * theAnswer.secondnumber)
]}
else if(theAnswer==="division"){[
    console.log(theAnswer.firstnumber / theAnswer.secondnumber) 
]}
else{[
    console.log("invalid tool")
]}
