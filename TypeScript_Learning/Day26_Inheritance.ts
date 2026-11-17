/*
All the resuable code is written in parent or base class
Child class use parent class code by extending it

Code resuability
Avoid duplicate code
Better maintenance
It will also supports Method overriding (Concept of polymorphism)

Single Inheritance :
One child class inherits from one parent

Multilevel Inheritance :
Class inherits from another class which also is a inherited class

Hierachihcal Inheritance :
One parent multiple child classes

Multiple Inheritance :
One child, two parents
JS wont support this
Multiple inheritance with classes it is not possible,
but possible with Interfaces
Interfaces will have only Abstract methods
Abstract Method : Method with body [Only declaration]

If dealing with classes > Use extends
If dealing with Interfaces > Use implements 

Hybrid Inheritance :
Extends classes as well as implements interfaces
*/

//Single Inheritance
class Employee
{
    company:string='ABC'

    work():void{
        console.log('Employee is working')
    }
}
class Developer extends Employee
{
    code():void{
        console.log('Person will code')
    }
}
let developerobj=new Developer();
//parent things
console.log(developerobj.company)
developerobj.work()
//Child things
developerobj.code()

//Multilevel Inheritance
class granparent
{
    house():void{
        console.log('Owns a house')
    }
}
class parent extends granparent
{
    car():void{
        console.log('Owns a BMW Car')
    }
}
class child extends parent
{
    car2():void
    {
        console.log('Owns a Baleno car')
    }
}

let prp=new child();
prp.house()
prp.car()
prp.car2()

//Hierachihcal Inheritance 
class Animal
{
    eat():void{
        console.log('Animal will eat')
    }
}
class Dog extends Animal
{
    bark():void{
        console.log('Dog will bark')
    }
}
class Cat extends Animal
{
    sound():void{
        console.log('Cat will make meow sound')
    }
}

let dogobj=new Dog()
dogobj.bark()
dogobj.eat()

let catobj=new Cat()
catobj.eat()
catobj.sound()

//Interfaces
interface Flyable
{
    fly():void;
}
interface swimable
{
    swim():void;
}

class Eagle implements Flyable, swimable
{
    fly():void{
        console.log('Flying')
    }
    swim(): void {
        console.log('Swimming')
    }
}
let Eagleonj=new Eagle()
Eagleonj.fly()
Eagleonj.swim()

//Hybrid Inheritance
class Vehicle
{
    start():void{
        console.log('Vehicle Starts')
    }
}
interface GPS
{
    navigate():void;
}
class Car extends Vehicle implements GPS{
    navigate(): void {
        console.log('Navigation of GPS')
    }
}
let carobj=new Car();
carobj.start()
carobj.navigate()

//Method Overriding > It required Inheritance concept
//Child class provides new implementation for the parent class method
