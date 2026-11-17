//Arrays : Array is a variable which will store multiple values
let arr=[10,30,20,40]
let personDetails=['Ammu', 30, 200, true]
console.log(typeof(arr)) //Type of array is Object

//Array is non-primitive data type and it is stored in Heap
//Acess in a better way > manipulate
// Access by using index
// Array lenght > Number of elements in an Array
console.log(arr.length) //print lenght
console.log(arr[arr.length-1]) //Print last index
console.log(arr[arr.length-2]) //Print last second element

//Modifying using index
let numarr=[1,9,8,7,6,0]
numarr[2]=5
console.log(numarr)

//Mutate methode : modify original array directly
// push > add one or more elements to the end
// it will return modified array length
// synatx > arrayname.push(el1, el2, .....)
let numarr1=[1,90,89,7,63,990]
numarr1.push(45,67,88)
console.log(numarr1)

// pop : Remove last element from an array and return it
// syntax > array.pop()
console.log(numarr1.pop()) //removes last value
console.log(numarr1)

// Shift > Removes and returns first Element
console.log(numarr1.shift())
console.log(numarr1)

//Unshift > Add elements at the start
console.log(numarr1.unshift(3,33,34,35))
console.log(numarr1)

//includes : Value exist or not > Boolean methods
console.log(numarr1.includes(60))
console.log(numarr1.includes(33))

//indexOf() > In which position
let arr1=['Ammu', 20, 'Hello', 'Orange']
console.log(arr1.indexOf(20))

//slice > Part of an array > last index will be excluded
//Not a mutate method
console.log(arr1.slice(1,3))

//concat > merge two strings
console.log(arr1.concat('Fruits'))

//reverse > reverse all the elements in an array
//It is a mutate method
console.log(arr1.reverse())

//sort : mutate method
//(a,b)=>b-a  > change the condition for ascending or descending order
// Only for numbers we need to use comparative method [by using arrow function]
// but for string we can direclty use sort method
let num2=[87,36,-3,9,4]
num2.sort((a,b)=>b-a)
console.log(num2)
let s=['Boy', 'Zebra', 'Apple', 'Ballon', 'Mango']
console.log(s.sort())

//iterate methods
//By using normal for loop, for of , for each
let num3=[3,5,6,4,44]
for(let i=0;i<num3.length;i++)
{
console.log(num3[i])
}
//for of
for(let n of num3)
{
console.log(n)
}
//for each
num3.forEach((number)=>{
console.log(number)
})

//In Array, we can apply
//map() > all elements
//filter() > filtering the data
//reduce() > reduce it into single value