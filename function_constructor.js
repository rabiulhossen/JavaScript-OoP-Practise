  

/** 
 * 4 principale of OOP in JS
 * Abstraction
 * Encapsulation
 * Inheritansce
 * Polymorphism

*/

/* 

* 3 ways to make objects in OOP
- function constructor
- class
- object.create()

// 4 ways of fucntion construction

- create an empty object {}
- function is called this ={}
- { } linked to prototype
- {} will return automatically


*/


// const obj ={}
// obj.name =  "simon"
// obj.profession = "developer"



// const Computer = function(name,part){
//   this.name= name;
//  this.part = part;
// //  this.aboutComputer = function(){
// //   console.log(`this contains ${this.name} and part ${this.part}`)}

// }

// Computer.prototype.aboutComputer = function(){
//   console.log(`this contains ${this.name} and part ${this.part}`)}


// const Pc = new Computer("dell", "ic")
// const hp = new Computer("hp", "ram")

// hp.aboutComputer()



// Array.prototype.filter= function(obj) {

// let arr =[]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// }

// object  ||
      

var purchase ={

  shoes: 100,
  tax :1.5,
  totalPrice: function ()
{
var total = purchase.shoes* purchase.tax;
console.log(total, "totalPrice");
}}


purchase.totalPrice()
purchase.totalPrice()


class Car{
  constructor(name,speed){
    this.name = name;
    this.speed = speed;
  }
  turboOn(){
    console.log("turboOn")
  }
}

Car.turboOn() 

//  * build a class
//  todo  1. using Class keyword;
//  todo  2. using this keyword;
//  todo 3. add a constructor function to accept parameters
//  todo 4.

/* 
 ! Benefits of OOP
todo  Allows you to write modular code,
todo code more flexible
todo  code reusable
*/


//  ? difference between abstruction and encapsulation
/* 
* An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

 * Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.
*/
//  * polymorphism means something is that can take on many shapes.

// ? polymorphism example
/* 
A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.
*/
