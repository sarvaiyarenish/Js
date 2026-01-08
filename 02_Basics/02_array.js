const anime = ["JJK","Overflow","Onepunchman","horimiya"]
const mc = ["Rimuru","Gojo","Tanjiro","Saitama"]

// anime.push(mc)

// console.log(anime);
// console.log(anime[4][1]);

// const allAnime = anime.concat(mc)
// console.log(allAnime);

const allAnime = [...anime, ...mc]

// console.log(allAnime);

const another_arr = [1,2,3,[6,9,7],4,5,6,[2,5,4,5,[2,1,3,6]]]

const completeArr = another_arr.flat(Infinity)

// console.log(completeArr);


console.log(Array.isArray("Renish"));
console.log(Array.from("Renish"));
console.log(Array.from({name: "Renish"})); // interesting

let scoere1 = 100
let scoere2 = 200
let scoere3 = 300

console.log(Array.of(scoere1, scoere2, scoere3));
