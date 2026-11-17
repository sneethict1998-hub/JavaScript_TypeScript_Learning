// //One way of importing , used in real time
import {add,sub,mul} from './Day21_Exportfile.js' //named import

console.log(add(2,3))
console.log(sub(2,3))
console.log(mul(2,3))

// //Another way of importing
import * as cal from './Day21_Exportfile.js' //Not use in real time

// // //Another way with Alias
import {add as addTwoNumbers} from './Day21_Exportfile.js'

// //If in export file there is Alias name, then import with same Alias name
import { addition as AddNumbers } from './Day21_Exportfile.js'
console.log(AddNumbers(2,3))

// //Import default 
import concat from './Day21_Exportfile.js'
console.log(concat('Snee','Ammu'))

import { Student } from './Day21_Exportfile.js'
let Studentobj=new Student('Ammu', 20)
Studentobj.displayDetails();