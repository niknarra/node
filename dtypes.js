//Primitive Data Types in JS

let numex1 = 10; //number
let numex2 = 1.11; //also a number

let strex = 'The Diamond'; //string
let strex2 = 'In The Rough'; //also a string

let boolex = true; //logical entity which is true
let boolex2 = false; //logical entity which is false

let nickname;
console.log(nickname); //this will log undefined as the var nickname is declared but not defined

let x = null; //intentionally make this hold a null value which is not undefined

const str = Symbol('id'); // id is the unique identifier of the str object

//Non-Primitive Data Types

const person = {
firstName: "Diamond",
lastName: "In the Rough",
age: "23",
likes: "pressure"
};

//This is an object 

let cars = ['Porsche','Nissan','Lamborghini','BMW'];

//This is an array

let hps = [550,650,675,765];

//This is also an array

function whatsMyName() {
console.log("The Diamond");
}

//This is a function, which can be looked at as an object that can be invoked

whatsMyName();
