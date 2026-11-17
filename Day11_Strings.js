let str='Ammu'
console.log(typeof (str))

//3 ways
let s='Hai'
let s2="Sneethi"
let s3=`Hello how are you? ${s2}`

//Strings are immutable
let str1='Sneethi'
str1='Ammu' //a new memory will be allocated for this
console.log(str1)

let s1='Sneethi'
s1[0]='A'
console.log(s1) //Unchanged

//Escape characters   \
let s4="Hello one \"Ammu\""
console.log(s4)

//Methods of String
let str9='Hello'
console.log(str9.toUpperCase()) //converts to uppercase
console.log(str9.toLowerCase()) //converts to lowercase
console.log(str9.length) //find the length of the string
//console.log(str9.length-1)
console.log(str9.charAt(1)) //find the character at a particular index, position of the character in the string
console.log(str9.indexOf('e')) //Find the index of a particular character in the string
console.log(str9.indexOf('t')) //If the character is not present in the string, it will return -1
console.log("I am Sneethi".includes("am")) //Check if the string contains a particular character or not, returns true or false
console.log("aeiouAEIOU".includes(str[2]))
console.log("Hello world".includes("wo",7)) //includes("wo",7))  , here wo first parameter is search string and second parameter is optional and it is the position from where the search should start, if not mentioned it will start from 0th index

let m="Warning : Please provide Aadhar"
if(m.startsWith("Warning")){
    console.log("Warning message")
}
else if(m.startsWith("Error")){
    console.log("Error message")
}

/////
if(m.endsWith("Warning")){
    console.log("Warning message")
}
else if(m.endsWith("Aadhar")){
    console.log("Aadhar message")
}

//Substring : To fetch part of the string
console.log('Hello'.substring(1,3)) //First start is inclusive and second end is exclusive, so it will return el
console.log('Hello'.substring(3))

//Replace :To find the string and then replace. Replaces its first occurence
console.log("Hello world".replace("Hello", "Hai"))
console.log("Hello world".replace("l", "k")) //replaces first occurence of l with k, so it will return Heko world

//ReplaceAll : Replaces all occurences of the string
console.log("Hello world".replaceAll("l", "k")) //replaces all occurences of l with k, so it will return Hekko workd

let name = "QA";
let result = name + 100;
console.log(result);