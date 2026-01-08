// Array

const myArr = [1,2,3,4,5]
const myAnime = ["JJk","Overflow","Horimiya","OnePunchMan"]
const myArr1 = new Array(1,2,3,4,5)

// console.log(myArr[0]);
// console.log(myAnime[1]);
// console.log(myArr1[2]);


// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice , Splice

console.log("A ",myArr);

const myn0 = myArr.slice(1,3) 

console.log(myn0);
console.log("B ",myArr);

const myn1 = myArr.splice(1, 3); 
console.log("c ", myArr);
console.log(myn1);
