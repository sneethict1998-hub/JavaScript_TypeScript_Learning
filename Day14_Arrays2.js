//Splice method : mutate method
//array.splice(start,deletecount,item1,item2...)
//it will add,remove, it will replace also

let arr=[3,6,5,4,7]
arr.splice(1,2) //deletion
console.log(arr)

arr.splice(3,0,6) //add > 0 is given as no number is there to delete, hence by default given as 0
console.log(arr)

arr.splice(1,1,10) //Replace 1st index with another value
console.log(arr)

//iterate methods
//map() > wont change original array
//it will take arrow function as a parameter
//it will transforms each elemnt in an array
/*syntax
array.map((element,index,array)=>{
    
})

If there is only one line then no need to put {},
but if we put {}, then we have to return it.
so {return <result>}
let a=array.map(element=>element+2) //new transformed array 

*/
let arr1=[10,20,30,40]
let result=arr1.map(num=>num+2)
console.log(result)

let s=['Ammu','Eva','Nidhi']
let lenarray=s.map((element,index,s)=>{
    console.log(element)
    console.log(index)
    console.log(element)
    return element.length
})
console.log('Print lenght array : '+lenarray)
//filter
/*syntax 
array.filter(element, index,array)=>{condition})

*/
let arr2=[9,8,7,6,5,4]
let even=arr2.filter(num=>num%2===0)
console.log(even)

/*reduce : reduces output to single value
Syntax:
array.reduce((accumulator,element,index,array)=>logic,initialvalue)

*/
let arr3=[1,2,3,4]
let r=arr3.reduce((result,num)=>result+num,10)
console.log(r)

let rwords=['Hello','Hai', 'World']
let r0=rwords.reduce((sum,element)=>{
    return sum+element.length
},0
)
console.log("Result : "+r0)

/* Search methods :
find : it will check condition and returns first elements
findlast : it will check condition and returns matching last element
indexOf : find the first index of value
lastIndexOf : find the last index of value
*/
let arr4=[10,30,34,40,45,40,70]
let r1=arr4.find((num)=>num>35)
let r2=arr4.findLast((num)=>num>35)
let r3=arr4.indexOf(40,1)
let r4=arr4.lastIndexOf(40,6)
console.log(r1)
console.log(r2)
console.log("IndexOf 40 :"+r3)
console.log("LastIndexOf 40 :"+r4)

let arr0 = [1, 2, 3]; arr0.shift(); console.log(arr0);