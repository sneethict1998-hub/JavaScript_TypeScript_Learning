/*
Any :
Disables typescript typechecking
Should not be used

Unknown :
Type safe alternative to any
Force to check types when doing any operation

Never :
Represent something that will never happen
Two important scenarios :
Functions that never return
Exhaustive condition checking


*/

//any
let empid:any;
empid=20;
empid=true
empid=[1,2,3,4]
empid=70.999
empid='Ammu'
console.log(empid)
console.log(empid.toUpperCase())

//unknown 
let data:unknown;
data='Eva'
if(typeof(data)==='string')
{
    console.log(data.toUpperCase())
}

if(typeof(data)==='number')
{
    console.log(data.toFixed(2))
}

//Never
function add():never
{
    throw new Error('This is not working method')
}
function infinteloop():never
{
    while(true)
    {
        console.log('It will run infinitely')
    }
}

//Exhaustive condition
type EmploeeRole='Admin'|'Manager'|'Tester';
function displayRole(role:EmploeeRole)
{
    switch(role)
    {
        case 'Admin' :
            return 'Admin access';
        case 'Manager':
            return 'Manager access';
        case 'Tester':
            return 'Tester access';
        default :
        const value:never=role;
        return value;
    }
}

/*
== =>Normal comparison, check only value
=== => Strict comparison, check value and datatypes

*/
let a='123'
let b=123
//== loose equality not strict comparison
//console.log(a==b) //normal comparison
//=== strict equality operator => value and datatype
//console.log(a===b) //Strict comparison