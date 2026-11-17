function printString(str='Hello') //default parameter
{
    console.log("Print : " + str)
}
printString('Sneethi')
//Function Expressionlet 
addition=function add(a,b)
{
    console.log(a+b)
}
addition(2,3)
//Without function name//Annonymous function
let addition1=function (a,b) //without function name. 
{
    console.log(a+b)
}
addition(2,3)
//Arrow function
let productnumber1=(num1, num2)=>{
        return num1*num2
}
console.log(productnumber1(2,3))
//Arrow function form 2 , without paranthesis
let productnumber2=(num1, num2)=> num1*num2
console.log(productnumber2(12,3))
//If only one parameter is there, then can skip paranthesis
let productnumber3=num1=> num1*num1console.log(productnumber3(3))
//FUnction patterns
//Immediately invoked function ()();
/*(function()
{    
    console.log("Connect to DB")
    })();*/
//Callback function
function multiply(num1, num2)
{ 
    console.log(num1*num2)
}
function mainfunction(message,callback)
{
    console.log(message)
    callback(3,5)
}
mainfunction('Hello World',multiply)
greet(); 
const greet = function() 
{ 
    console.log("Hello"); 
};