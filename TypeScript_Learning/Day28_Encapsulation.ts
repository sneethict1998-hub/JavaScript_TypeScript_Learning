/*
Two types of Encapsulation classes
1. Loosely coupled encapsulation class
2. Tightly coupled encapsulation class

If variables are public in your class > Then it is loosely coupled
If variables private or protected > Tighly coupled
Can access this private or protcted by two methods
getter method to read the variable
setter method to change the variable
Every variable will have getter and setter method

*/

class Employee
{
    private salary:number=30000;

    //getter method
    getSal():number{
        return this.salary;
    }
    //setter method
    setSal(amount:number)
    {
        if(amount>0)
        {
            this.salary=amount;
        }
        else{
            console.log('This is invalid')
        }    
    }

    deductSal(amount:number):number{
        if(amount<this.salary)
        {
            this.salary=this.salary-amount;
            return this.salary;
        }
        else{
            console.log('Invalid Salary');
            return this.salary;
        }
    }
}
let emp=new Employee();
console.log(emp.getSal());
//emp.setSal(1000);
//console.log('New Salary is : '+emp.getSal())
emp.deductSal(3000);
console.log('New Decuted Salary is : '+emp.getSal())
