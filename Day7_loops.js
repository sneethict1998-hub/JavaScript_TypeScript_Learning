//Print 10 number
for(let i=1;i<=10;i++)
{
    console.log(i)
}
console.log('Next line of code')
//print even numbers from 1 to 10
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}
console.log('Other logic')
for(let i=2;i<=10;i=i+2)
{
    console.log(i)
}

//Find first 10 numbers sum
console.log(`Next program`)
let n=9
let sum=0
for(let i=1;i<=n;i++)
{
    sum=sum+i
}
console.log(`Sum of first ${n} numbers is :`+sum)

//Using while loop printing 1 to 10
console.log(`Next program`)
let i=1
while(i<=10)
{
    console.log(i)
    i++;
}

//Using do while loop
console.log(`Next program`)
let num=20
do
{
    console.log(num)
}
while(num<12)

//For skipping any iteration in between
console.log(`Next program`)
for(let i=1;i<=12;i++)
{
    if(i===6)
    {
        continue;
    }
    console.log(i)
}

console.log(`Next program`)
let i1 = 1; while (i1 <= 10) { if (i1 % 2 === 0) { console.log(i1); } i1++; }