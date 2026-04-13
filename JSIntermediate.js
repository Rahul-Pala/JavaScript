console.log("Hello")

//Create a function that takes a string as a parameter and 
// returns the string with the first
//character of each word changed into a capital letter, 
// as in the example below. Test it with
//different strings.

function ucFirstLetters(str) {
    return str
        .split(" ")                      // 1. Split into words
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        )                               // 2. Capitalize each word
        .join(" ");                     // 3. Join back into string
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles
console.log(ucFirstLetters('hello'))

function uCFirstLetters(str) {
    const words = str.split(" ");     // str.split
    const capitalized = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    const result = capitalized.join(" ");
    return result;
}

console.log(uCFirstLetters('Cute Babbu'))

const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result)

const words = ["hello", "world"];

const wordResult = words.map(word => word.toUpperCase());

console.log(wordResult);
// ["HELLO", "WORLD"]

//Remember: array.map(item => transformation)

array = [1,2,3,4,5,6]

function arrayBy5(numbers) {
 let arrayby5Done = numbers.map(num => num * 5)

 return arrayby5Done
}

console.log(arrayBy5(array))

const fruits = ["apple", "banana", "mango"]

function fruitsUpperCase(stringg) {
    let upperCase = stringg.map(str => str.toUpperCase())
    return upperCase
}

console.log(fruitsUpperCase(fruits))

// function fruitsUpperCase(arr) {
   // return arr.map(str => str.toUpperCase());
// }

//const fruitsUpperCase = arr => arr.map(str => str.toUpperCase());