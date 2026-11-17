/*1. What is Hoisting in JavaScript? Explain with a suitable example.Hoisting is a concept where Javascript moves all the declarataions to the top of the program.
var a; //undefinedlet b;const c;
console.log(a)var a=10console.log(a)
console.log(b) //Reference errorlet b=20
console.log(c) //Reference errorconst c=30console.log(c)
Here VAR will be hoisted to the top of the program and will be initialized with undefined.
But let and const will not be hoisted to the top of the program. Hence it will give reference error. */

//2. Create a non-return function to perform the addition of two numbers.
console.log("Program to perform the addition of two numbers using non-return function.")
function add(n1,n2)
{
    let sum=n1+n2;
    console.log("Sum of two numbers is : "+sum)
}
add(2,3)
//3. Create a return function to perform the addition of two numbers.
console.log("Program to perform the addition of two numbers using return function.")
function add2(a,b)
{
    let s=a+b;
    return s;
}
console.log("Sum of two numbers with return functions is : "+add2(5,6))