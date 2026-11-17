/*
Destructing :
Step 1 :
Way of accessing your value from array or => Array destructuring []
Way of accessing properties from an object => Object destructuring {}
Step 2 :
After accessing store it in variables


*/
//Destructuring
let student:string[]=['Ram','QA','Kannur']
let [name,course,city]=student


let numbers:number[]=[2,3,5,6]
//let[a,b,c,d]=numbers
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//Want to access only few elements
let[a,,,d]=numbers
console.log(a)

//Using rest operator
let[first,...remaining]=numbers
console.log(first)
console.log(remaining)
