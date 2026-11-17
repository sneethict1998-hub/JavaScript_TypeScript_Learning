/*
Async and Await
Async will always return promise
Async can handle through await



*/
async function step1()
{
    return new Promise((resolve,reject)=>{
        resolve(10);
    })
}
async function step2(num)
{
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}
async function step3(num)
{
    return new Promise((resolve,reject)=>{
        resolve(num+10)
    })
}
let r1=await step1();
let r2=await step2(r1);
let finalResult=await step3(r2);

//If the function is async, we have to use await 