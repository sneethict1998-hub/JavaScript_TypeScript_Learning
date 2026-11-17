/*
Chaining of a Promises : calling multiple asynchronous promises together 
using then operation, so that they can execute in sequential order


All promises are asynchronous code

*/
function step1()
{
    return new Promise((resolve,reject)=>{
        resolve(10);
    })
}
function step2(num)
{
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}
function step3(num)
{
    return new Promise((resolve,reject)=>{
        resolve(num+10)
    })
}
step1().then((result)=>{
    return step2(result)
}).then((r2)=>{
    return step3(r2)
}).then((finalResult)=>{
    console.log(finalResult)
}).catch(()=>{

})