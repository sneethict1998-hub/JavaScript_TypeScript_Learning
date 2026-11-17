//Number is positive,negative or zero
let a=-78
if(a>0)
{
    console.log('Number is Positive')
}
else if(a<0)
{
    console.log('Number is Negative')
}
else
{
    console.log('Number is Zero')
}

//Number is Even or Odd
let num=45
if(num/2==0)
{
    console.log('Number is Even')
}
else
{
    console.log('Number is Odd')
}

//Find the largest of two numbers
let m=30
let n=39
if(m>n && m<n)
{
    console.log(`${m} is the largest number`)
}
else
{
    console.log(`${n} is the largest number`)
}

//Find the largest of three numbers
let num1=10
let num2=400
let num3=90
if(num1>num2 && num1>num3)
{
    console.log(`${num1} is the largest`)
}
else if(num2>num1 && num2>num3)
{
    console.log(`${num2} is the largest`)
} 
else
{
    console.log(`${num3} is the largest`)
}

//Check whether person is eligible to vote
let age=17
if(age>18)
{
    console.log('Person is eligible to vote')
}
else
{
    console.log('Person is not eligible to vote')
}

//Check whether year if leap year
let year=2032
if((year%400==0) || (year%4==0 && year%100!=0))
{
    console.log(`${year} is a leap year`)
}
else
{
    console.log(`${year} is not a leap year`)
}
