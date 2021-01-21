const input = require('readline-sync');
const str = input.question("What word would you like to change to pig latin?")
let num = Number(input.question("How many letters would you like to be relocated?"));

if (Number.isSafeInteger(num) === false) {
  console.log("Please enter a valid number");
}

if (num > str.length) {
   num = 3;
   console.log(`Your input was greater than the ${str}'s length so 3 will be used as default.`);
} 

const strSliced1 = str.slice(0,`${num}`);
const strSliced2 = str.slice(`${num}`, str.length);
const pigLatin = strSliced2.concat(strSliced1);

if (Number.isSafeInteger(num) === true) {
console.log(`Your pig latin word for ${str} is ${pigLatin}.`);
}






