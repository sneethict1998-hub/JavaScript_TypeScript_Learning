/*
A function inside a class is called method
*/

//Without overloading
class calculator
{
    addNumbers(a:number,b:number):number
    {
        return a+b;
    }
    addString(a:string,b:string):string
    {
        return a+b;
    }
}
let obj=new calculator();
console.log(obj.addNumbers(2,3))
console.log(obj.addString('Snee','Ammu'))

//With overloading
class cal 
{
    //signatures
    add(a:number,b:number):number;
    add(a:string,b:string):string;

    //implementation
    add(a:number|string,b:number|string):number|string
    {
        if(typeof(a)=== 'number' && typeof(b)==='number')
        {
            return a+b;
        }
        if(typeof(a)=== 'string' && typeof(b)==='string')
        {
            return a+b;
        }
        throw new Error('Invalid arguments')

    }
}
let ob=new cal();
console.log(ob.add(2,8))
console.log(ob.add('Ram','Seeta'))