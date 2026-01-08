// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const otsideTemp = null;

let userEmail;

const id = Symbol("123");
const SecondId = Symbol("123");

// console.log(id === SecondId);

// const bigNumber = 12345678912345611551n

// Refrence (also called as) (Non Primitive)

// Array, Objects, Functions

const anime = ["Gojo", "Sukuna", "Toji", "Yuji"];

let myIntro = {
  name: "Renish",
  age: 20,
};

const myFunction = function () {
  // console.log("Hello World!!");
};

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "Sarvaiya";

let anothername = myName;
anothername = "Gojo";

console.log(anothername);
console.log(myName);

let user = {
  email: "gojo@gmail.com",
  upi: "gojo@okski",
};

let userTwo = user;

userTwo.email = "renish@gmail.com";
userTwo.upi = "renish@okski";

console.log(user);
console.log(userTwo);
