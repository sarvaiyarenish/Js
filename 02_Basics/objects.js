// Singleton
// Object.create

// object Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Renish",
    "full name": "Renish Sarvaiya",
    [mySym]: "mykey1",
    email: "sarvaiay@gmail.com",
    age: 20,
    location: "Rajkot",
    isLoggedIn: false,
}

// console.log(JsUser.email);
// console.log(JsUser.full name);

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "renish@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "gojo@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingOne = function () {
  console.log(`Hello Js User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingOne());
