//Function without parameters
let a=10
console.log(a)
function func()
{
    console.log(a)
}
func()

//function with parameters and //function without return type
function add(num1,num2)
{
    let c=num1+num2;
    console.log(c)
}
add(2,9)

//function with return type
function  multiply(num1, num2)
{
    let r=num1*num2;
    return r;
}
let result=multiply(2,3)
console.log(result)

//Default parameter

for (let i = 0; i < 5; i++) {

    if (i === 3) continue;

    if (i === 4) break;

    console.log(i);

}