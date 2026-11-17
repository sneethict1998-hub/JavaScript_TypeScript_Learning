class Animal
{
    sound():void{
        console.log('Animal makes sound')
    }
    runs():void{
        console.log('All animal runs')
    }
}
class Dog extends Animal{
    sound():void{ //Method Overriding
        console.log('Dog barks') 
        //If we want to access parent class details also, then use super keyword
        super.sound()
    }
    loyal():void{
        console.log('Its loyal')
    }
}
let Dogobj=new Dog();
Dogobj.sound()
Dogobj.runs()
 
//First priority it will search for Child class, then go to Parent class
