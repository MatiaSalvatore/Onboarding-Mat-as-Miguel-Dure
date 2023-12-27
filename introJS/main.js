console.log("Starting javascript..")
//JS Basic Exercises
//Difficulty Level: Low
//1.
let myName = "Matías";
//2.
let myLastName = "Dure";
//3.
let myAge = 26
//4.
let myPet = "Loly"
//5.
let myPetAge = 10
//6.
let fullName = myName+" "+myLastName 
//7.
let presentationText = "Hi! My name is "+fullName+". I'm "+myAge+" years old."+" And this is my pet "+myPet+" it's "+myPetAge+" years old!";

//Difficulty Level: Medium
//1.
let sumAges = 1
let substractAges = 1
let productAges = 2
let divisionAges = 2
console.log(myAge+sumAges)
console.log(myAge-substractAges)
console.log(myAge*productAges)
console.log(myAge/divisionAges)
console.log(myPetAge+sumAges)
console.log(myPetAge-substractAges)
console.log(myPetAge*productAges)
console.log(myPetAge/divisionAges)

//2.
const student ={
    firstName:"Matías",
    lastName: "Dure",
    age: 25,
    working:false,
    hobbie:"Videogames",
}
console.table(student);
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.working)
console.log(student.hobbie)

//3.
const pet ={
    name:"Loly",
    animal:"Dog",
    breed:"Dachshund",
    age: 10,
    trained:true,
}
console.table(pet);
console.log(pet.name)
console.log(pet.animal)
console.log(pet.breed)
console.log(pet.age)
console.log(pet.trained)

//4.
let fruits = ["bananas","apples","melons","oranges","strawberries"];
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
//Difficulty level: High
//1.
let iAmAdult = Number(prompt("Enter your age"));
console.log("I am an adult :", iAmAdult>=18)

//2.
let numbers = [1,2,3,4,5,6]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])

//3.
let family = ["Matias","German","Analia","Miguel","Gabriela"]
console.log(family)
console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])

//4.
let randomText = "Today I ate "+numbers[3]+" "+fruits[1]+" with "+family[4]
console.log(randomText)