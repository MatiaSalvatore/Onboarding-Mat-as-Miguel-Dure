let myName = "Matías Miguel Dure";
console.log("Starting javascript..")

const arrayofnumbers =[1,20,700,17,100];

let max = null
let current = null

for (let n in arrayofnumbers){
    current = arrayofnumbers[n]
    max = Math.max(current,max)
}

console.log(max)
