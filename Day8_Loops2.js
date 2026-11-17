let arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//using for of loop
console.log("Using for of loop")
for(let num of arr)
{
    console.log(num)
}

console.log("Print only even numbers from array")
for(let num of arr)
{
    if(num%2==0)
    {
        console.log(num)
    }
}

console.log("Print count of even and odd numbers")
let evenCount=0;
let oddCount=0;
for(let num of arr)
{
    if(num%2==0)
    {
        console.log(num +" is even number")
        evenCount=evenCount+1;
    }
    else
    {
        console.log(num +" is odd number")
        oddCount=oddCount+1;
    }
}
console.log("Even numbers count: "+evenCount)
console.log("Odd numbers count: "+oddCount)

console.log("Each character of string")
let str='Hello world'
for(let char of str)
{
    console.log(char)
}


console.log("Print vowels in a string")
for(let char of str)
{
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
    {
        console.log(char)
    }
}