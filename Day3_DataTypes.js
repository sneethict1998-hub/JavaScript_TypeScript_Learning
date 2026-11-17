//Number
let a=20;
let c=32.89
console.log(a)
console.log(typeof a)
console.log(typeof c)

console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

//Bigint
let b=9007199254740991n
console.log(b)
console.log(typeof b)

//Boolean
let isfound=true
let hasflag=false
console.log(isfound)
console.log(typeof isfound)

//undefined
let empname
console.log(typeof empname)

//null
let object=null
console.log(object)
console.log(typeof object)

//String
let studentname='Amy'
let topic="Playwright"
let batch='Morning Batch'
let message=`I am ${studentname},
learning ${topic} from ${batch}`
console.log(message)
console.log(typeof message)

let id1 = Symbol("id"); 
let id2 = Symbol("id"); 
console.log(id1 === id2);