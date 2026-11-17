/*
Synatx is with {}

*/
type studentdtls=
{
    name:string,
    cllass:string,
    school:string
}
let student:studentdtls={
    name:'Ram',
    cllass:'4',
    school:'xyz'
}
//Without destructuring
let studentname=student.name
let studentclass=student.cllass
let studentschool=student.school
//console.log(studentname)

//With destructuring
// let {name,cllass,school}=student
// console.log(name)
// console.log(cllass)
// console.log(school)

//Get only one/two parameter
// let{name,school}=student
// console.log(name, school)

//Seleting particular values > Renaming variables
// let{name : nameofstudent, school:schoolname}=student
// console.log(nameofstudent, schoolname)

//Defining your default values
// let{name,address='Kannur'}=student
// console.log(address)

//Defining own datatypes
// type employee={
//     name:string
//     role:string
// }
// let a:employee
// let b:string

//Pass an object to the function
type employee={
    name:string
    role:string
}
function displayEmployeeDetails({name,role}:employee)
{
    console.log(name, role)
}
displayEmployeeDetails({name:'Ammu', role:'Student'})

//return object by using detstructing
function getStudent()
{
    return {nme:'Eva',rle:'Student'}
}
let {nme,rle}=getStudent();
console.log(nme, rle)
