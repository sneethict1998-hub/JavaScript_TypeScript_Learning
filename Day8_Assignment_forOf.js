//1.Write a program to print all elements of an array using for...of.
console.log("Program to print all elements of an array using for...of.")
let element=[1, 'Hello', true, 3.14, 'World']
for(let item of element)
{
    console.log(item)
}
//2.Write a program to print all numbers from an array using for...of.
console.log("Program to print all numbers from an array using for...of.")
let arr=[10,20,30,40,50]
for(let num of arr)
{
    console.log(num)
}
//3.Write a program to find the sum of all numbers in an array using for...of.
console.log("Program to find the sum of all numbers in an array using for...of.")
let sum=0;
for(let s of arr)
{
    sum=sum+s;
}
console.log("Sum of all numbers is : "+sum)
//4.Write a program to find all even numbers in an array using for...of.
console.log("Program to find all even numbers in an array using for...of.")
let arr1=[1,2,3,4,5,6,7,8,9,10]
for(let even of arr1)
{
    if(even%2==0)
    {
        console.log(even +" is even number")
    }
    
}
//5.Write a program to find all odd numbers in an array using for...of.
console.log("Program to find all odd numbers in an array using for...of.")
for(let odd of arr1)
{
    if(odd%2!==0)
    {
        console.log(odd +" is odd number")
    }
    
}
//6.Write a program to find the largest number in an array using for...of.
console.log("Program to find the largest number in an array using for...of.")
let arr2=[30, 78, 99, 101, 45, 67, 89]
let l=arr2[3]
for(let largest of arr2)
{
   if(largest>=l)
   {
        console.log("Largest number is : "+largest)
   }
}

//7.Write a program to count the number of vowels in a string using for...of.
console.log("Program to find the largest number in an array using for...of.")
let s='Hello World'
let count=0;
for(let char of s)
{
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
    {
        count++;
    }
}
console.log("Number of vowels in the character is : "+count)

//8.Write a program to reverse a string using for...of.
console.log("Program to reverse a string using for...of.")
let r="";
for(let char of s)
{
    r=char+r;
}
console.log("Reversed string : "+r)
