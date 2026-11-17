/*
Encapsulation :
Wrapping up data(variables/fields/properties)
and methods into a single unit
Every class is an eg for encapsulation
It should restrict direct access/edit of data
Data/Variables can access/edit through its own class public methods


*/
//Without encapsulation
class BankAccount
{
    balance:number=10000; //data/variables/fields/properties

}
let obj=new BankAccount();
//read
console.log(obj.balance)

//Directly modifying
obj.balance=50000;
console.log(obj.balance)

/*Access modifiers 
This will control Who can access your class members (variable, methods, constructor)
They help in encapsulation, data security

3 Access modifiers :
public () : by default it will be public
You can access any where from your project

protected() :
Can access inside a class and in only child classes

private() :
Can access only in same class, not outside the class


*/

//protected 
class Animal
{
   protected sound:string='Roar';
}
class Lion extends Animal
{
    display()
    {
        console.log(this.sound);
    }
}
let aobj=new Lion();
aobj.display();

//private
class ICICI
{
    private balance:number=3000;
    displayBalance()
    {
        console.log(this.balance)
    }
}
let bankobj=new ICICI();
bankobj.displayBalance();