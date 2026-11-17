// let employee: [string, number] = ["Mohan", 30]; employee[0] = "Priya"; 
// console.log(employee);

function getStudent(): [string, number, boolean] { return ["Rahul", 22, true]; } const [name, age, isPassed] = getStudent(); console.log(age);

let numbers: number[] = [10]; let [a, b = 100] = numbers; console.log(b);

let employee = { name: "Mohan", role: "Tester" }; let { name: employeeName } = employee; console.log(employeeName);

class Employee { work(): void { console.log("Employee Working"); } } class Developer extends Employee { override work(): void { super.work(); console.log("Developer Writing Code"); } } const dev = new Developer(); dev.work();

class Calculator { add(a: number, b: number): number; add(a: number, b: number, c: number): number; add(a: number, b: number, c?: number): number { return c !== undefined ? a + b + c : a + b; } } const cal = new Calculator(); console.log(cal.add(10, 20)); console.log(cal.add(10, 20, 30));

function add(a: number, b: number): number; 
function add(a: string, b: string): string; 
function add(a: any, b: any): any { return a + b; } console.log(add(10, 20)); 
console.log(add("Hello ", "World"));

function search(id: number): void; 
function search(name: string): void; 
function search(value: any): void {
if (typeof value === "number") 
{ 
console.log("Searching by ID"); 
} 
else { 
console.log("Searching by Name"); 
} 
} 
search(101); 
search("Laptop");

function area(side: number): number; 
function area(length: number, breadth: number): number; 
function area(a: number, b?: number): number
{ 
if (b) 
  {
  return a * b; 
  }
  return a * a; 
} 
console.log(area(5)); 
console.log(area(10, 20));

class User 
{ 
getDetails(id: number): string; 
getDetails(name: string): string[]; 
getDetails(value: number | string): string | string[] 
 { 
if (typeof value === "number") 
     { 
      return `User ID is ${value}`; 
     } return ["User Name: " + value]; 
   } 
} 
const user = new User(); 
const result1 = user.getDetails(101);

function test(a: number): void; 
function test(a: string): void; 
function test(a: any): void { 
console.log(a);
 } 
//test(true);

class Employee1 {
private salary = 30000;
display() {
console.log(this.salary);
}
}
const emp = new Employee1();
emp.display();

class BankAccount {
private balance = 1000;
deposit(amount: number) {
this.balance += amount;
}
getBalance() {
return this.balance;
}
}
const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());

abstract class Vehicle { 
abstract start(): void; 
} 
class ElectricCar extends Vehicle 
{ 
override start(): void { 
console.log("Electric Car Started"); 
} 
} 
const car = new ElectricCar(); 
car.start();

abstract class Employee2
{ 
constructor(public readonly name: string, protected basicSalary: number) 
    {
    } 
 } 
class PermanentEmployee extends Employee2 
{ 
getSalary(): number 
 { 
return this.basicSalary;
  } 
} 
const emp1 = new PermanentEmployee("Mohan", 60000); console.log(emp1.getSalary());

//let value: any = 100; console.log(value.toUpperCase());

function printValue(value: unknown): void 
{
 if (typeof value === "string") 
 { 
console.log(value.toUpperCase()); 
 } 
} printValue("Mohan");

enum TestStatus { Passed = "PASSED", Failed = "FAILED", Skipped = "SKIPPED" } console.log(Object.values(TestStatus));