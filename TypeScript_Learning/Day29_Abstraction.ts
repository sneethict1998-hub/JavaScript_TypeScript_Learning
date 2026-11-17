/*
Abstraction :
Hiding implementation details and exposing only the essential functionality
to the user
 => User knows what object does,
 => but he does'nt know how it does it

 We can achieve abstraction using
 Abstract class
 Interfaces

 Types of methods :
 1. Abstract method 
 Methods where it does not have a body
 It does'nt have any implementation or body
 If some class extends, the abstract class they have to give
 implementation to the abstract methods

 keyword => abstract

 2. Concret/Normal method

 Abstract class :
 Cannot be instantiated (creating an object) directly
 It is designed to be inherited by other classes
 An abstract class can contain 
 => abstract methods (without body)
 => concrete methods (with body)
 => properties
 => constructor



*/

//Abstract class

abstract class payment
{
    //abstract method
    abstract makePayment(amount:number):void;

    //concrete method
    paymentSuccess():void{
        console.log('Payment is success')
    }
}
class Credit extends payment
{
        makePayment(amount:number):void
        {
            //Provide logic
            console.log(`Paid ${amount} using credit card`)
        }

}
class UPI extends payment
{
    makePayment(amount:number):void
        {
            //Provide logic
            console.log(`Paid ${amount} using UPI payment`)
        }
}
let creditobj=new Credit();
let upiobj=new UPI();
creditobj.makePayment(2000);
creditobj.paymentSuccess();
upiobj.makePayment(500);
upiobj.paymentSuccess();

//Interfaces
/*
=> Its other way to achieve abstraction
=> Contract defined by interfaces should followed by implemented classes
=> All your methods should be abstract
=> Keyword used is implement
=> Supports multiple inheritance


*/
interface Browser
{
    launchBrowser():void;
    openUrl(url:string):void;
    closeBrowser():void;
}
interface BrowserAction
{
    performAction():void;
}
//Implementing the interface
class ChromeBrowser implements Browser,BrowserAction //Multiple inheritance
{
    launchBrowser():void
    {
        console.log('Browser launched')
    }
    openUrl(url:string):void
    {
        console.log(`Opening the url ${url}`)
    }
    closeBrowser():void
    {
        console.log('Browser closed')
    }
    performAction():void
    {
        console.log('Action performed')
    }
}
let chromeobj=new ChromeBrowser()
chromeobj.launchBrowser();
chromeobj.openUrl('http://google.com')
chromeobj.performAction()
chromeobj.closeBrowser()
