//One way to export
export let add=(a,b)=>{
    return a+b;
}

export let sub=(a,b)=>{
    b-a;
}

export let mul=(a,b)=>{
    a*b;
}

export function concat(a,b)
{
    return a+b;
}

export class Student
{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
    displayDetails()
    {
        console.log(`${this.name} and ${this.id}`)
    }
}

//Another way to export, export at once
export{add,mul,sub,concat}; //In real time use

// //Another way with Alias
export{add as addition, sub as subtraction, mul as multiplication, concat as function}

// //Default Export
export default function concat(a,b)
{
    return a+b;
}