/*
Type Alias : it allows to create new custom type
name by using existing types

Syntax : type typename = existing types;

*/

//Type Alias
type EmplopyeeName=string|number;
let emp1:EmplopyeeName;
emp1='Ammu'

type Student={
    id:number;
    name:string;
    address:string
}
let student1:Student={
    id:100,
    name:'Eva',
    address:'Alavil'
}

type Person={
    name:string;
    age:number;
}
type EmployeeDetails={
    empid:number;
    deptmnt:string;
}
type newEmp= Person & EmployeeDetails;
let emp2:newEmp;
emp2={
    name:'Nidhi',
    age:34,
    empid:23,
    deptmnt:'CS'
}

//Type Annotations
/*
Type Annotations : Explicity we are telling the datatype
of a variable, function parameters or function
return type

syntax :
let variableName:datatype=value;
*/
//Variables
let stdname:string;
let sal:number;
let isPermanent:boolean;

//With array
let numbers:number[];
let names:string[];

//Tuple
let empee:[number,string];

//Functions
function add(a:number|string,b:number|string):number|string
{
    if(typeof(a)==='number' && typeof(b)==='number')
    {
        return a+b;
    }
    else if(typeof(a)==='string' && typeof(b)==='string')
    {
        return a+b;
    }
    else
    {
        throw new Error('Invalid datatypes')
    }  
}
add(2,4)

//With objects
let empobj:
{
    id:number,
    name:string,
    age:number,
    sal:number
};

//Union types
/*
Union types : it will allow to accept more than one datatype
with symbol |

*/
let x:number|string;
x='Ram'
x=45

//type inference : if no datatype is provided, ts will take the datatype
let empname='Anu' //empname:string

//Implicit conversions :
/*number+string =>string
string-number =>number 
boolean+number =>number

*/

//Explicit conversions
let age='30'
let result=Number(age)
console.log(result)

let string='100.50'
console.log(parseInt(string))

//Explicit functions
/*
Number()
String()
Boolean()
parseInt()
parseFloat()

*/