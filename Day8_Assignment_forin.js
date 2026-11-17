//1. Write a program to print all keys of an object using "for...in".
console.log("Program to print all keys of an object using for...in.")
let element =
{
    name: "Rahul", age: 25, city: "Bangalore" 
}
for(let k in element)
{
    console.log(k)
}

//2. Write a program to print all values of an object using "for...in".
console.log("Program to print all values of an object using for...in.")
for(let k in element)
{
    console.log(element[k])
}

//3. Write a program to print both keys and values of an object using "for...in".
console.log("Program to print both keys and values of an object using for...in.")
let element1 =
{
    name: "Rahul", age: 25, city: "Bangalore" 
}
for(let k in element1)
{
    console.log(k +" : "+element1[k])
}

//4. Write a program to calculate the sum of all numeric values in an object using "for...in".
let result=0;
let sum={
     math: 80, science: 75, english: 90
}
for(let s in sum)
{
    result=result+sum[s]
}
console.log("Sum of all numeric values is : "+result)