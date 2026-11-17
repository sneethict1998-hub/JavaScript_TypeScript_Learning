1//Write a function to calculate the product of two numbers. Implement the program using all the following function types
//Normal Function
function m1(n1, n2){
    console.log("Multiplication using normal function : " + n1*n2)
}
m1(2,3);

//Function Expression
let product=function m2(n3,n4){
    console.log("Multiplication using Function Expression : " + n3*n4)
}
product(5,5)

//Arrow Function
let pro1=(n5,n6) => {
    console.log("Multiplication using ArrowFunction : " + n5*n6)
}
pro1(9,9)

//Callback function
function mult(n7, n8){
    console.log("Multiplication using Callback function : " + n7*n8)
}
function mainfunction(callback){
    callback(4,15)
}
mainfunction(mult);

//IIEF
(function (n9,n10){
    console.log("Multiplication using IIEF : " + n9*n10);
})(3,5);

//---------------------------------------------------------------------------------------------------------------------------------------------

//2. Repeat the same programs using all five function types, but this time return the product instead of printing it inside the function.

//Normal Function with return
function multiply(n11, n12){
    return n11*n12
}
console.log("Multiplication using normal function using return statement : "+ multiply(4,3))

//Function Expression with return
let pr1=function multiply1(n13,n14){
    return n13*n14
}
console.log("Multiplication using Function Expression using return statement : "+ pr1(10,5))

//Arrow Function with return
let pr2=(n15,n16) => {
    return n15*n16
}
console.log("Multiplication using Arrow Function using return statement : "+ pr2(10,9))

//Callback function with return
function mul2(n17, n18){
    return n17*n18
}
function mainfunction1(callback){
    return callback(4,10)
}
console.log("Multiplication using CallbackFunction using return statement : "+ mainfunction1(mul2));

//IIEF with return
console.log("Multiplication using IIEF using return function : " +(function (n19,n20){
    return n19*n20;
})(3,3));