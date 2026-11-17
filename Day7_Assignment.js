//Print numbers from 20 to 30
console.log('Print numbers from 20 to 30')
console.log('Using For Loop')
for(let i=20;i<=30;i++)
{
    console.log(i)
}

//using while loop
console.log('Using While Loop')
let i=20
while(i<=30)
{
    console.log(i)
    i++;
}

//Print numbers 1 to 10 in reverse
console.log('Print numbers 1 to 10 in reverse')
for(let i=10;i>=1;i--)
{
    console.log(i)
}
//Find sum of first 5 numbers
console.log('Find sum of first 5 numbers')
let n=5
let sum=0
for(let i=1;i<=n;i++)
{
    sum=sum+i
}
console.log(sum)

//Print odd numbers from 1 to 20
console.log('Print odd numbers from 1 to 20')
for(let i=1;i<=20;i++)
{
    if(i%2!=0)
    {
        console.log(i)
    }
}
//Find sum of even numbers from 1 to 10
console.log('Find sum of even numbers from 1 to 10')
let sum1=0;
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {
        sum1=sum1+i
    }
}
console.log(sum1)

//Print 1 to 50 by skipping 10 multiples
console.log('Print 1 to 50 by skipping 10 multiples')
for(let i=10;i<=50;i++)
{
    if(i%10==0)
    {
            continue;
    }
    console.log(i)
    
}