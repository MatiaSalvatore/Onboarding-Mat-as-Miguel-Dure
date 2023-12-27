//Functions Excercises

//Difficulty Level: Low

//1.
//function add(){
//    console.log(100*20)
//}

//2.
// add()

//3
//function add(x,y){
//    console.log(number1*number2);
//}

//4
let num1 = 100;
let num2 = 2;

//5.
function add(x,y){
    let result = x * y;
    return result
}

var multiplication = add(num1,num2)

console.log(multiplication)

//Difficulty Level: Medium

//1.
function greet(name){
    let greeting = "Welcome "+name+"!"
    return greeting
}

var greetings = greet("Matias");
console.log(greetings)

//2.

function multiply(x,y){
    let result = x * y;
    let message = "The multiplication of "+x+" and "+y+" is "+ result+"."
    return message
}

var multiplynumbers = multiply(20,50)

console.log(multiplynumbers)

//3.
function area(b,h){
    let arTriangle = (b * h)/2
    return arTriangle
}
//4.
function perimeter(l1,l2,l3){
    let pemTriangle = l1 + l2 + l3;
    return pemTriangle 
}

//5.
function discount(number,price){
    let total_price
    if (number>=10 && number < 20){
        total_price = (number * price)*0.9
    }
    else if (number>=20){
        total_price = (number * price)*0.8
    }
    else {
        total_price = (number * price)
    }
    return total_price
}

//6.
function isAnAdult(age){
    let message
    if (age <18 && age>=0){
        message="You are not an adult"
    }
    else if (age>=18){
        message="You are an adult"
    }
    return message
} 

//Difficulty Level: High
//1.
function taxCalc(aIncome){
    let total_tax
    if (aIncome<=10000 && aIncome>0){
        total_tax= aIncome*0.1
    }
    else if (aIncome>10000 && aIncome<=20000){
        total_tax= aIncome*0.15
    }
    else if (aIncome>20000){
        total_tax = aIncome*0.2
    }
    return total_tax
}

//2.

function dayswitch(day){
    let message
    switch (day) {
        case 1:
            message= "It is a business day.";
            break;
        case 2:
            message= "It is a business day.";
            break;
        case 3:
            message= "It is a business day.";
            break;
        case 4:
            message= "It is a business day.";
            break;
        case 5:
            message= "It is a business day.";
            break;
        case 6:
            message= "It's the weekend.";
            break;
        case 7:
            message= "It's the weekend.";
            break;
    }
    return message
}

//3.

function personalINfo(firstName,lastName,age){
    const person={
        firstName,
        lastName,
        age,
    }
    person.firstName= prompt("Enter yor name:")
    if (person.firstName === ""){
        console.error("Name cannot be empty")
        return
    }
    person.lastName = prompt("Enter your last name.")
    if (person.lastName === ""){
        console.error("Last name cannot be empty")
        return
    }
    person.age = prompt("Enter yor age:")
    if (person.age === ""){
        console.error("Age cannot be empty")
        return
    }
    console.log(person)
    return person
}

personalINfo()


//4.

function lGreet(name){
    let message1 = "Hello my name is "+ name + ".";
    return message1
}

function lcalculateAge(bYear,cYear){
    let age = cYear - bYear
    let message2 = " I'm "+ age+" years old."
    return message2
}

function lpresent(){
    let finalMessage = lGreet(prompt("Enter your name") + lcalculateAge(prompt("Year of birth"),prompt("Current year")));
    alert(finalMessage)
    return finalMessage
}

lpresent()