/*
Website 
  HTML > Structure for webpage
  CSS > look and feel things (colors,fonts,layout and designs)
  javascript > functionality or behaviour of webpage
Javascript is a single threaded language
Default execution of JS is synchronous execution
Synchronous Execution : Execute line by line
Once the line 1 get executed and completed, then only it will go to next line

Asynchronous Execution :
Will work if steps are independent with each other
async execution : If steps are dependent with each other, then you 
have to write logic to make it proper execution

setTimeout
setTimeout(()=>{
    
},timeout)

Techniques to male dependent asyn calls into sequential :
Callback
Promises
async function with await keyword

Callback > Code is not readable and not easy to use,so it called callback hell

*/
console.log('Switch on WM')
setTimeout(()=>{
 console.log('Clothes Washed')
},800);
console.log('Get Ready')
console.log('Pack bags')
console.log('Go to School')

//Callback hell
setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("How are you");
    setTimeout(() => {
      console.log("Eva");
      setTimeout(() => {
        console.log("Are you doing good ?");
      }, 2000);
    }, 12000);
  }, 3000);
}, 1000);