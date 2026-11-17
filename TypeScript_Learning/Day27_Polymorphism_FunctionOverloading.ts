/*
1. Method Overriding > Requires inheritance
2. Method Overloading

Method Overriding :
Method name should be same

Method Overloading :
One function behaving differently
Doesnt require class also
Step 1 :Give multiple function declarations =>Overloaded signatures
Step 2 :Only one implementation which satisfies all the function signatures


*/
//Without overloading
function getuserbyEmpId(id:number)
{

}

function getuserbyEmpmailId(emailid:string) //signature
//Implementation or body of a function
{

}

//With function overloading concept
//Step 1 : all the method/function signatures
function getUser(id:number):void;
function getUser(email:string,age:number):void;

//Step 2 : providing the implementation it should match all the signatures
function getUser(input:number|string,age?:number):void
{
    console.log('Fetch the details')
}
getUser(123)
getUser('ammu@gmail.com',29)