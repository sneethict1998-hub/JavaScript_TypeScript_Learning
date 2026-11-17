/*
Tuple :
Kind of a datastructure just like array
It will store a fixed number of values with specific datatypes
in a particular order
Syntax :
let variableName:[DT1,DT2,DT3]

Tuple vs Object
Tuple use when have small number of objects
Used for API response mainly for storing status code, error message

TS will provide optional things (?)

Destructuring :




*/

let numbers:number[]=[10,20,40]
numbers.push(90)

//Tuple
let emp:[string,number,boolean]
emp=['Ammu',30,true]

let student:[string,number]=['Eva',2]

//Accessing elements in a tuple
console.log(student[1])

//Update tuple
student[0]='Ammu'
console.log(student)

//Tuple with optional parameter
let user:[string,number?]
user=['Nidhi']

// ... > Rest operator
let scores:[string,...number[]]=['Amy',34,45,5,66]

//named tuples
let userdetails:[name:string,age:number]=['Ram',60]

//Tuple with functions
//type employee=[string,number]
function displayEmpDetails(emp:[string,number]):[string,number]
{
    console.log("name",emp[0])
    console.log("age",emp[1])
    return emp
}
let output=displayEmpDetails(['Hello',25])
console.log(output)