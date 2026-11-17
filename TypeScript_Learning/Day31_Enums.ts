/*
Enums => Used to store group of related constants
Instead of writing hardcoded values everywhere we are going to store
enums
Syntax :
 enum <enumname>
 {
 value 1,
 value 2,
 value 3,
 .....
 }

 For enums always the values will start with 0

 Advantage :
 Can be used in reverse way


*/
//Without enums
let status=1
if(status===1)
{
    console.log('Active')
}
else{
    console.log('Not active')
}
//Drawbacks =>Nobody knows everything
//Difficult to maintain

//With enums
enum Status{
Active,
Inactive,
Pending
}
let status1=Status.Active;

//numeric enums
enum Directions
{
    North, //0
    South, //1
    West, //2
    East //3
}
console.log(Directions.North)

//custom enums
enum apiStatusCode
{
    Success=200,
    CreationSuccess=201,
    NotFound=404,
    ServerError=500
}
console.log(apiStatusCode.NotFound)
console.log(apiStatusCode[201]) //used in reverse way

//Auto increment enums
enum Numbers
{
    a=15,
    b,   //16
    c    //17
}
console.log(Numbers.b)
console.log(Numbers.c)

//String enums
enum Browsers
{
    chrome='CHROME',
    firefox='FIREFOX',
    edge='MICROSOFT EDGE'
}
console.log(Browsers.firefox)

//heterogeneous enums => contains both numbers and strings
enum heterogeneous
{
    yes=1,
    no='No'
}

//constant enums =>Cannot change values
const enum Days
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
