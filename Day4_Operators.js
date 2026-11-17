//Arithmetic
let a=10
let b=20
console.log(a+b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Assignment
let m;
m=10;
m+=5
console.log(m)

//Comparison ==
let sal1=12
let sal2=12
console.log(sal1==sal2)

//Comparison ===
let a1=182882
let b1='182882'
console.log(a1===b1)

//Logical 
console.log(5>2 && 2>1)
console.log(5>2 || 2>1)
console.log(!(5>2))

//String
console.log(10+22)
console.log('Ammy'+2)
console.log('10'-2)
console.log('Ram'-2) //Nan

//Increment and Decrement
let d=10
let c=20
console.log(++d) //11 
console.log(d) //11
console.log(c++) //20
console.log(c) //21


console.log(1 + "1");
console.log("5" - 2);

console.log(0 || "Default");
let count = 0;

console.log(count || 10);

let num = 7;

let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);

let age = 16;

console.log(age >= 18 ? "Adult" : "Minor");

let price = 1000;

let isMember = true;

let finalPrice = isMember ? price * 0.8 : price;

console.log(finalPrice);