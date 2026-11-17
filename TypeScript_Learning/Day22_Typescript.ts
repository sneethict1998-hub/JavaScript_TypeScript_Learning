/*
Javascript :
JS is a run time language
When a variable is not provided with type annotations
Types are dynamic. A variable can hold anything
When wrong value is given, then silently it will accept
Dynamically typed language


Benefit of TS :
TS is a compile time language
Type checking + Additional features
Catches error before running. 
Errors will be showing while typing
Safer changes
Types are static, once u declare, TS will follow
When wrong value is given, complie time error will come

Syntax :
let variablename:type=value
let a:number=10;
let s:string='Ammu'
let isactive:boolean;

String array :
let browser:string[]=['Chrominum','Firefox']

TS will convert to JS, and Js will be executed in node js

function functionname(param:type,param,type):retunType
{

}

Optional parameters : ?
If dont give any optional parameter, it is acceptable

Typescript : tsc (typescript complier) > typechecking or any error checking > javascript
tsx > tsx program.ts

TS Installation commands :
tsc > npm install -g typescript > Typescript complier
tsx > npm install -g tsx > For executing TS programs

For tsconfig.json file use command
npx tsc --init

For package files :
npm init -y

To check version :
tsc -v



*/

let a1:number=10;
//let s1:string='Ammu';
let isactive:boolean;
let browser:string[]=['Chrominum','Firefox']

let data:any=10;
data='Eva'

function greet(a:number,b:number):number{
    return a+b;
}
greet(10,20);

//Optional parameter
function greeting(x:number,y?:number){
   
}
greeting(10);

//Default parameter
function hello(browsername:string='Chrome')
{
    console.log(browsername)
}
hello(); //uses default value
hello('Firefox'); //uses given value