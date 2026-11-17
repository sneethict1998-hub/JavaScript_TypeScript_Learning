/*
Class is not mandatory in Javascript
Class : It is a blueprint for objects
Class wont exist in real time
It is a template for creating objects
Class will contain :
Variables (features), methods (behaviour)
If function is inside a class, then called as a method

Syntax :
class <classname>
{
    //variables
    //constructor
    //methods
}
should not declare variable with let
To access class, we need to create an object


Object is an instance of a class which is
created by using a class
It will represent actual entity
It exist in real time
Syntax :
Object name=new <classname>()
calling : objectname.variables
          objectname.mathods
<classname>() : it is called constructor
Constructor will have same name as classname
2 types of constructor :
Userdefined constructor
Default constructor
Constructor will initialize the variables which is there in class
If we dont provide any constructor, it will create a default constructor inside class
and class variable by using this keyword


*/

//Creating class
class Student{
    name;
    address;
    //Initializing variable
    constructor(name,address)
    {
        this.name=name //represents class variable
        this.address=address  //represents class variable
    }
    goToSchool(schoolName)
    {
        console.log("Goes to School name : "+schoolName)
    }
}
//creating an object > by using new keyword
let student1=new Student('Ammu','Bejai')
console.log(student1.name)
console.log(student1.address)
student1.goToSchool('ABC')

let student2=new Student('Eva','Mangalore')
console.log(student2.name)
console.log(student2.address)
student2.goToSchool('USSS')

//OOPS Concepts 
//Encapsulation : Tightly binding variables in a class
// 2 types : Loosly coupled [Declared public variables] and Tightly coupled encapsulation
//Abstraction : Hiding implementation details and showing only necessary details
//Inheritance : Reusable methods
//Polymorphism : Method overloading and Method overriding (Perform 1 task in different ways)

class Student0
{ 
constructor(name) 
{
 this.name = name; 
} 
} 
const s1 = new Student0("Ravi"); 
console.log(s1.name);