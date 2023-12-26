//Conditionals Exercises

//Difficulty Level: Low
//1.
console.log("Ejercicio 1:")

let num1= "4"
let num2= "5"
if (num1>num2){
    console.log(num1)
}
else{
    console.log(num2)
}

//2.
console.log("Ejercicio 2:")

if (num1>num2){
    console.log(num1)
}
else if (num1 < num2){
    console.log(num2)
}
else {
    console.log( "The numbers are equal")
}

//3.
console.log("Ejercicio 3:")

if (num1===num2){
    console.log( "The numbers are equal")
}
else {
    console.log( "The numbers are different")
}
//4.
console.log("Ejercicio 4:")
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date1>date2){
    console.log("The date " +date1 + " is greater than the date " +date2);
}
else if (date1<date2){
    console.log("The date " +date2 + " is greater than the date " +date1);
}
else{
    console.log("The dates are the same.")
}

//5.
console.log("Ejercicio 5:")
let date3 = "2072-11-11"
let date4 = "2050-7-5"

if (date3>date4){
    console.log("The date " +date3 + " is greater than the date " +date4);
}
else if (date3<date4){
    console.log("The date " +date3 + " is greater than the date " +date4);
}
else{
    console.log("The dates are the same.")
}

//6.
console.log("Ejercicio 6:")

let number1 = 5;
let number2 = 7;
let number3 = 9;

if ((number1 > number2) && (number1 > number3)){
    console.log("The number " +number1 +" is the largest")
}
else if ((number2 > number1) && (number2 > number3)){
    console.log("The number " +number2 +" is the largest")
}
else if ((number3 > number2 )&& (number3 > number1)){
    console.log("The number " +number3 +" is the largest")
}


//Difficulty Level: Medium
console.log("Difficulty Level: Medium")
//1.
alert("Welcome to excersise 1 of medium difficulty!")
console.log("Ejercicio 1:")
let color = prompt("Write a primary color: ")
switch(color){
    case "red":
        console.log("The color of passion");
        break;
     case "blue":
        console.log("The color of the sea");
        break;       
    case "green":
        console.log("The color of nature");
        break;      
}

//2.
alert("Welcome to excersise 2 of medium difficulty!")
console.log("Ejercicio 2:")
let firstNumber = Number(prompt("Type a number between 1-100 "));
let secondNumber = Number(prompt("Type a number between 1-100 "));
let operation = prompt("Type an operation(sum, subtraction, multiplication, division)");

switch(operation){
    case "sum":
        console.log("the sum of "+firstNumber +" and " +secondNumber+ " is " +(firstNumber+secondNumber));
        break;
     case "subtraction":
        console.log("the substraction of "+ firstNumber +" and " +secondNumber+ " is " +(firstNumber-secondNumber));
        break;       
    case "multiplication":
        console.log("the multiplication of "+ firstNumber +" and " +secondNumber+ " is " +(firstNumber*secondNumber));
        break;      
    case "division":
        console.log("the division of "+ firstNumber +" and " +secondNumber+ " is " +(firstNumber/secondNumber));
        break;      
}

//3.
console.log("Ejercicio 3:")

const person1={
    name: "Juan",
    age:39,
    height:1.69
}

const person2={
    name:"Rosa",
    age:40,
    height:1.69
}

let phrase1
let phrase2
let completephrase
if (person1.age !== person2.age && person1.height !== person2.height){
    if (person1.age > person2.age && person1.height > person2.height){
        console.log(person1.name + " is older and taller than " +person2.name+".")
    }
    else if ((person1.age < person2.age && person1.height < person2.height)){
        console.log(person2.name + " is older and taller than " +person1.name+".")
    }
    else if ((person1.age > person2.age && person1.height < person2.height)){
        console.log(person1.name + " is older than " +person2.name+". But "+person2.name+" is taller than "+person1.name+".")
    
    }
    else if ((person1.age < person2.age && person1.height > person2.height)){
        console.log(person2.name + " is older than " +person1.name+". But "+person1.name+" is taller than "+person2.name+".")
    }    
}
else if (person1.age === person2.age && person1.height !== person2.height){
    if (person1.height>person2.height){
        console.log("Both " + person1.name +" and " + person2.name + " are the same age. But " +person1.name+" is taller than "+person2.name+".")
    }
    else if (person1.height<person2.height){
        console.log("Both " + person1.name +" and " + person2.name + " are the same age. But " +person2.name+" is taller than "+person1.name+".")
    }
}
else if (person1.age !== person2.age && person1.height === person2.height){
    if (person1.age>person2.age){
        console.log("Both " + person1.name +" and " + person2.name + " are the same height. But " +person1.name+" is older than "+person2.name+".")
    }
    else if (person1.age<person2.age){
        console.log("Both " + person1.name +" and " + person2.name + " are the same height. But " +person2.name+" is older than "+person1.name+".")
    }
}
else if (person1.age === person2.age && person1.height === person2.height){
    console.log("Both " + person1.name + " and " +person1.name+" are equal in age and height")
}


//4.
alert("Welcome to excersise 4 of medium difficulty!")
console.log("Ejercicio 4:")
const personalData={
    name: prompt("Enter your name:"),
    age: Number(prompt("Enter your age:")),
    height: Number(prompt("Enter your height (cm):")),
    vision: Number(prompt("Vision from 1 to 10:"))
}
if (personalData.age >= 18 && personalData.height > 110 && personalData.vision >= 8){
    console.log(personalData.name+ ", you are qualified to drive")
}

//5.
alert("Welcome to excersise 5 of medium difficulty!")
console.log("Ejercicio 5:")

let inputAge = Number(prompt("Enter your age :"))

if (inputAge < 0){
    alert("That value is not allowed")
}
else if (inputAge <= 12){
    alert("Infant")
}
else if (inputAge<=18){
    alert("Adolescent")
}
else if (inputAge<=45){
    alert("Older young")
}
else if (inputAge <=100){
    alert("Older young")
}
else if (inputAge > 100){
    alert("Is he really that old?")
}


//6.

alert("Welcome to excersise of medium difficulty!")

let multiplier = Number(prompt("Enter a multiplier from 1 to 3:"))
let numbermulti = Number(prompt("Enter any number to multiply it:"))
let multiply = multiplier * numbermulti

if (multiplier === 1){
    alert("The number entered is "+multiply)
}
else if (multiplier === 2){
    alert("Twice the number entered is "+multiply)
}
else if (multiplier === 3){
    alert("Three times the number entered is "+multiply)
}
else{
    alert("That value is not allowed")
}

//Difficulty Level: High

alert("Welcome to the last excersise!")
const customer={
    customName: prompt("Enter your name, costumer (People named 'Matias' enter for FREE)"),
    pass: prompt("Wich pass do you have? (VIP - NORMAL)"),
    entrance: prompt("Do you have a ticket? (YES - NO)")
}

if (customer.customName === "Matias" || customer.pass === "VIP"){
    alert("Welcome to the system!")
}
else if (customer.entrance === "YES"){
    if(prompt("Do you want to use the ticket? (YES - NO)")=== "YES"){
        alert("Welcome to the system")
    }
    else{
        alert("Goodbye!")
    }
}
else if (customer.entrance === "NO"){
    if (prompt("Do you want to buy a ticket? (YES - NO)") === "YES"){
        if (Number(prompt("How much money do you have? (tickets cost 1000)" )) >= 1000){
            alert("Purchase successful!")
            alert("Welcome to the system")
        }
        else{
            alert("Purchase unsuccessful")
        }
    }
    else{
        alert("Goodbye!")
    }
    }

