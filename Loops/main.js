//Loops Exercises

//Difficulty Level: Low

//1.

for (let number = Number(prompt("Enter a number for the countdown")); number >= 0 && number <=100; number--){
    console.log(number)
}

//2.
let multiplo=Number(prompt("Enter a multiplo"))

for (let n=0; n >= 0 && n <=10; n++){
    console.log(n*multiplo)
}

//3.
let sum = 0;
let num = Number(prompt("Enter a number"));

while (num !==0){
    sum = sum + num;
    num = Number(prompt("Enter a another number"));
}

console.log(sum)

//4.
let sum1 = 0;
let num1 = Number(prompt("Enter a number"));

do{
    sum1 = sum1+ num1;
    num1 = Number(prompt("Enter a another number"));
} while (num1 !== 0);

console.log(sum1)

//5.
const person = {
    name: "Matias",
    lastName: "Dure",
    origin: "Resistencia",
    studies: "UTN", };

for (const property in person) {
    console.log(`${property}`);
  }
  
//6.

for (const property in person) {
      console.log(`${person[property]}`);
    }
  
  
  //Difficulty Level: Medium

  //1.
let tries = 0

let secretnumber = Number(prompt("Guess the secret number."))

while (secretnumber !== sum){
    tries = tries + 1
    if (secretnumber > sum){
        console.log("The number entered is greater than the secret")
        secretnumber = Number(prompt("The number entered is greater than the secret. Try again."))
    }
    else if (secretnumber < sum){
        console.log("The number entered is less than the secret")
        secretnumber = Number(prompt("the number entered is less than the secret.Try again."))
    } 
}

if (secretnumber === sum){
    console.log("You got it right! The secret number was " + sum + " and you made "+tries +" attempts.")
    alert("You got it right! The secret number was " + sum + " and you made "+tries +" attempts.")
}

//2.

let numberDivisors = Number(prompt("Enter a number to find it's divisors."))
for (let n = numberDivisors; n > 0; n--){
    if (numberDivisors%n === 0){
        console.log(n)
    }
}

//3.
function RingBell() {
    return "Ding Dong,"
}

let dingdong = ""

for (let n=Number(prompt("Ring how many times?")); n>0;n--){
    dingdong = dingdong + " " + RingBell()
}

console.log (dingdong)

//4.

const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for (let date of dates){
    if (date > dateLimit ){
        console.log(date +" is greater than " + dateLimit)
    }
    else if (date < dateLimit){
        console.log(date +" is less than " + dateLimit)
    }
    else{
        console.log(date +" and " + dateLimit+ "are equal.")
    }
}

//5.
const colors = ["Red","Green","Blue","Violet","Brown","Black","White"]

for (let color in colors){
    console.log(colors[color])
}

//6.

function colored(n){
    while (n>0){
        n= n - 1
        for (let color in colors){
            console.log(colors[color])
        }
    }
}

colored(3)

//7.

const numberList = [2,5,10,30,100]

for (let value in numberList){
    let double = numberList[value] * 2
    console.log("The number is "+numberList[value]+" and it's double is "+double+"."  )
}

//8.
const family = [
    {name: 'Matias', 
    lastname: 'Dure', 
    age: 26, 
    member: 'Son'},
    {name: 'Miguel', 
    lastname: 'Dure', 
    age: 53, 
    member: 'Father'},
    {name: 'German', 
    lastname: 'Dure', 
    age: 38, 
    member: 'Son'},
    {name: 'Analia', 
    lastname: 'Niveiro', 
    age: 48, 
    member: 'Mother'}
]

function familyPresentation(){
    for (let i in family){
        console.log("Hello, I am "+family[i].name+" ("+family[i].member+") and I am "+family[i].age+" years old.")
    }
}
familyPresentation()

//Difficulty Level: High

//1.
let even = 0;
let odd = 0;
let eoNum = Number(prompt("Enter a random number (enter 0 to finish)"));

while (eoNum !==0){
    if (eoNum%2 === 0){
        even = even + 1;
        eoNum = Number(prompt("Enter a another number or 0 to finish "));
    }
    else{
        odd = odd + 1;
        eoNum = Number(prompt("Enter a another number or 0 to finish "));
    }
}
console.log("Even numbers: " + even)
console.log("Odd numbers: "+ odd)

//2.

const arrayofnumbers =[1,20,70,17,100];

let max = null
let current = null

for (let n in arrayofnumbers){
    current = arrayofnumbers[n]
    max = Math.max(current,max)
}

console.log(max)
