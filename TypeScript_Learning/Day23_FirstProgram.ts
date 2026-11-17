console.log('This is first typescript program')

let num:number;
num=20;
//num='Snee'; //Type checking

//Inference (Assume datatype, if no datatype is mentioned)
let c=true;

function add(s:number,x:number):number
{
    return s+x;
}
console.log(add(20,9))

//Type Aliases > creating your own datatype
type TestStatus='Pass'|'Fail'
let runstatus:TestStatus
//runstatus='Hello' //cannot use another value

//Type union
let Id:number|string //Strict checking
Id=20
Id='Ammi'

let empId:any; //breaking strict checking