//Slice
let str='Playwright'
console.log(str.slice(0,5))
console.log(str.slice(3,5))
console.log(str.slice(1))

//Split : It will take delimiter and split the string into array of strings
let str1='I am Sneethi'
console.log(str1.split(' '))

let str2='ravavavaiii'
console.log(str2.split('a')) //It will split the string at every occurence of a and return an array of strings

//Repeat : For print something multiple times
let str3='*'
console.log(str3.repeat(5)) //It will print * 5 times

//trim : It will remove the white spaces from the start and end of the string
//trimStart : It will remove the white spaces from the start of the string
//trimEnd : It will remove the white spaces from the end of the string
let str4='   Hello world    '
console.log(str4.trim())
console.log(str4.trimStart())
console.log(str4.trimEnd())

//padding
//padStart : It will add the given string to the start of the string until the length of the string is equal to the given length
//padEnd : It will add the given string to the end of the string until the length of the string is equal to the given length
let str5='Hello'
console.log(str5.padStart(6,'0'))
console.log(str5.padEnd(8,'*'))

//Concat : Join 2 strings
console.log("Hello"+" "+"World")
console.log("Hai".concat(" ", "Sneethi"))

//To print the last word of the string
let str6='Ram and Raj are good friends    '
let arr1=str6.trim('').split(" ")
console.log(arr1[arr1.length-1]) //It will print the last word of the string

//Reverse a string
let str7='Sneethi'
let rev=""
for(let char of str7){
    rev=char+rev
}
console.log(rev)

//COunt each character in a string > Occurence program
let str8="Sneethi"
let charcount={} //using objects
for(let char of str8){
    if(charcount[char])
    {
        charcount[char]++
    }
    else
    {
        charcount[char]=1
    }
}
console.log(charcount)

//Count unique characters in a string
for(let char1 in charcount){
    if(charcount[char1]==1)
    {
        console.log(char1+ " Occurance is: "+charcount[char1])
    }
}

//let text = "JavaScript"; console.log(text.slice(0, 4));
//let text = "JavaScript"; console.log(text.substring(0, 4));
//let text = "JavaScript"; console.log(text.slice(-6));
// let text = "JavaScript"; console.log(text.substring(-6));
// let text1 = "JavaScript"; // console.log(text1.slice(4, 0));
// let text2 = "JavaScript"; // console.log(text2.substring(4, 0));
// let text = "JavaScript"; // console.log(text.slice(-6)); console.log(text.substring(-6));

let text = "JavaScript";
console.log(text.slice(4, 0));
console.log(text.substring(4, 0));