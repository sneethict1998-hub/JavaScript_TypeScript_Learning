/*
Promises Static methods :
To handle multiple promises
It reduces code
Code redability

Promise.resolve(value)
Promise.reject(error)

*/

// let p=Promise.resolve('Validation successfull')
// p.then((result)=>{
//     console.log(result)
// })

// let r=Promise.reject('Validation Rejected')
// p.then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

//Handle multiple independent promises
//Promise.all([promise1,promise2,promise3,......])
// If all are pass > It will pass all promises
// If one of them got failed , then it will treat all as failed


// let p1=Promise.resolve('Fetch Data')
// let p2=Promise.reject('rejected')
// let p3=Promise.resolve('Sucessed')
// Promise.all([p1,p2,p3])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// //Promise.allSettled() : It will print all results even if it is rejected
// let p4=Promise.resolve('Fetch Data')
// let p5=Promise.reject('rejected')
// let p6=Promise.resolve('Sucessed')
// Promise.allSettled([p4,p5,p6])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

/*Promise.race([promise1,promise2,promise3,.....]) :Whoever completes execution first, that result will be 
captured either it is positive or negative */

let racep1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Ammu-error')
    },500)
})
let racep2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Eva')
    },2000)
})
let racep3=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Nidhi')
    },4000)
})
Promise.race([racep1,racep2,racep3])
.then((result1)=>{
    console.log(result1)
})
.catch((error1)=>{
    console.log(error1)
})

//Promise.any() : First successfull promise
