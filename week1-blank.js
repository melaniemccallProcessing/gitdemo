//Variables
//What is a Variable?
//Create three types of variables


//Change them and print to the console

//Declaration

//Assignment

//Initialization


//Discussion:
//What is the difference between let and const?
//What is var?
//What are some data types?
//What happens if I print a variable without an assigned value?

//Whats the most common naming convention for variables in Javascript?
//In the workplace: follow the practices of that organization for consistency

//TIP: Name your variables to be easily understood by another developer



//-------------------------------------------------
//Functions
//What is a function?
//Parameters, Arguments, and Returns
//Write a function and call it


//Add code to call a function once a button is clicked

//create a function that returns ounces from pounds
//store the return value in a variable and print to the console




//----------------------------------------------
//Comparison Operators

//equality operator
// let myNumber = 9;
// console.log(myNumber === 10);

//strict vs loose equality
// console.log('5' === 5); // false
// console.log('5' == 5); // true

// Which one is recommended?

//inequality operator
// let userName = 'sarah';
// console.log(userName !== 'sarah');

//relational operators
// console.log(myNumber > 11);
// console.log(myNumber < 11);
// console.log(myNumber >= 9);

//logical operators
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(!true); //false
// console.log(true || !false); //true


///--------------------------
//if Statements
//Discussion: Why do we use if statements?

//use pounds to oz converter function above ^^



//write an if statement checking if the pounds are over 16
//if this is true, print to the console "That's heavy!"
//if this is not true, print to the console "This is less than 16 pounds!"


//add an additional check to see if the pounds are less than 5
//if this is true, ptint to the console "That's light!"


//Truthy and Falsy
//Any value that is 0, an empty string ('' or ""), undefined, null, NaN, is converted to false/is falsy.
//All other values are converted to true/is truthy.

//add an additional check to see if pounds are equal to 0
//if this is true, print to the console "This weighs nothing!"


//Ternary Operator (intermediate)
// function isHeavy(pounds) {
//     return pounds >= 16 ? "That's heavy" : "That's light!";
// }
// console.log(isHeavy(1));


//More complex if statements
//  let age = 6;

// //write an if statement for if the age is less than 12 or greater than 65
// //if this is true, print to the console "Child/senior discount!"

const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?');
const userHeight = parseInt(prompt('What is your height in inches?'));

// // write an if statement checking if the attraction is "wave" and the user height is over 43 inches
// // //if this is true, print to the console "You are tall enough for this ride!"

if(attractionType === "wave" && userHeight >= 43) {
    console.log("You are tall enough!");
}

//Switch statements
// whats wrong with this switch statement?
let n = 2;
switch(n) {
    case 1:
        console.log("The number is 1");
        break;
    case 2:
        console.log("The number is 2");
        break;
    case 3:
        console.log("The number is 3");
        break;
    case 4:
        console.log("The number is 4");
        break;
    default:
        console.log("The number is not 1-4");
        break;
}
