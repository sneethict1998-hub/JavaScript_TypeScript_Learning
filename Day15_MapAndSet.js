/*
Map is just similar to object
Map contains key value pairs <key,value>, <key2, value2>
Key should be unique
Map is array of entries
*/

//Creating a map
let student=new Map();

//adding key value pair to map => by using set method
//If using set, thenshould provide key and value

student.set('Id', 2)
student.set('Name', 'Ammu')
student.set('Class', 'VII')
console.log(student)

//Overriding
student.set('Id', 3)
student.set('Name', 'Eva')
student.set('Class', 'VI')
student.set('School', 'ABC')
console.log(student)

//Fetching the values => get
console.log(student.get('Name'))

//Read the key which is not there
console.log(student.get('Address')) //return undefined

//Checking key is present or not =>has
console.log(student.has('result'))
console.log(student.has('Id'))

//Deleting entries , if deleting key, associated values will also get deleted
student.delete('Id')
console.log(student)

//get size of a map , use size
console.log(student.size)

student.set(1,"this is number")
student.set("1","this is String")


//Map, Set, Array => for of (entire entry)
//Objects => for in

//Initialize at a time
let marks=new Map([['Math',45],['Science', 65],['English',89]])
console.log(marks)

//Iterate using for of
for(let [key,value] of marks)
{
    console.log(key +" : "+value)
}

//forEach
marks.forEach((key, value)=>
{
    console.log(key)
  
    console.log(value)
})

//To get only keys
console.log(marks.keys())
//To get only values
console.log(marks.values())

//To get the values by using keys
for(let key of marks.keys())
{
    console.log(key +" value is : "+marks.get(key))
}

//Print direct values
for(let value of marks.values())
{
    console.log(value)
}

//Character occurance
//Duplicate characters in a string
//First non-repeated characters

//Set > It is a single dimensional collection
//It wont allow duplicates
//It mainly used for avoiding duplicates while storing
//To check value is there or not
//It wont allow to access with index

let numbers=new Set();
//Adding elements > use add
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(1) //wont allow to add duplicates
console.log(numbers)
console.log(numbers.size)

//Initialize
let n=new Set([1,2,3,4,5,6,7,3,5])
console.log(n)

//has, delete, clear (it will delete all values)
//delete
n.delete(1)
console.log(n)
//has
console.log(n.has(9))
console.log(n.has(7))

//clear
n.clear()
console.log(n)

//Remove duplicates and print only unique numbers
let arr=[1,4,5,3,5,3,6,8,6,9]
let uniqnum=new Set();
for(let num of arr)
{
    uniqnum.add(num)
}
console.log(uniqnum)

//only duplicates
let arr2=[1,4,5,3,5,3,6,8,6,9]
let dup=new Set();
let d=new Set();
for(let num of arr2)
{
    if(d.has(num))
    {
        dup.add(num)
    }
    else
    {
        d.add(num)
    }   
}
console.log(dup)

//Iterate
let n1=new Set([4,6,9,0,3,5])
for(let num of n1)
{
    console.log(num)
}


const stu = new Map([ ["name", "Priyanka"], ["result", undefined] ]); 
console.log(stu.has("result"));

const number = new Set([10, 20, 30]); 
console.log(number[0]);

const set = new Set([ { id: 101 }, { id: 101 } ]); console.log(set.size);

const a = new Set([1, 2, 3]); 
const b = new Set([3, 4, 5]); 
const result = new Set( [...a].filter(v => b.has(v)) ); console.log([...result]);
