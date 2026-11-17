/*
Statis methods or static variables belongs to a class
By using static keyword we can differentiate methods
Variables/Methods are of two types : Instance and Static
Static doesnt belongs to objects
To call static , no need to create object
Instance method will be called using object


*/
class EmpDetails
{
    static company='XYZ' //Static variable
    name; //instance variable
    
    EmpDetails(name)
    {
        this.name='Ammu'
    }
}
console.log(EmpDetails.company)

class MathOperations
{
    static add(a,b) //static method
    {
        return a+b
    }
    multiply(a,b) //instance method
    {
        return a*b
    }
}
console.log(MathOperations.add(2,3))

let calobj=new MathOperations()
console.log(calobj.multiply(2,3))
