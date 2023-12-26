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