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

console.log(fruitsUpperCase(fruits));

// function fruitsUpperCase(arr) {
   // return arr.map(str => str.toUpperCase());
// }

//const fruitsUpperCase = arr => arr.map(str => str.toUpperCase());

function truncate(str, max) {
return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate('Hello Rahul, how are you today?', 80))

const animals = ['Tiger', 'Giraffe']
animals.push('Lion', 'Rat')
animals.unshift('Dog', 'Cat')
animals.sort()

//function replaceMiddleAnimal(newValue) {
    //const middleIndex = Math.floor(animals / 2);
   // animals[middleIndex] = newValue
 //   return animals
//} 
console.log(animals)


function replaceMiddleAnimal(newValue) {
    let halfway = Math.floor(animals.length / 2);
    animals[halfway] = newValue;
    return animals;
}

console.log(replaceMiddleAnimal('Shark'));

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLocaleLowerCase().startsWith(beginsWith.toLocaleLowerCase()))
}
console.log(animals)
console.log(findMatchingAnimals('r'))

function camelCase(cssProp) {
    let words = cssProp.split('-');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            result = result + words[i]
        }
        else {
            result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
       
    }
    return result
}
 
console.log(camelCase('hello-rahul'))

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

function currencyAddition(float1, float2) {
      let wholeNumber1 = float1 * 100;
      let wholeNumber2 = float2 * 100;

      return (wholeNumber1 + wholeNumber2) / 100
}

console.log(currencyAddition(0.20,0.10))

function currencyOperation(float1, float2, operation) {
    let num1 = Math.round(float1 * 100);
      let num2= Math.round(float2 * 100);

      let result;
      
      if (operation === '+') {
        result = (num1 + num2) / 100
      }

      else if (operation === '-') {
        result = (num1 - num2) / 100
      }

      else if (operation === '*') {
        result = (num1 * num2) / 10000
      } 

      else if (operation === '/') {
        result = (num1 / num2)
      }
      else {
        return "Invalid operation"
      }

      return result
}

console.log(currencyOperation(100, 20, '/'))
console.log(currencyOperation(100, 20, '*'))
console.log(currencyOperation(100, 20, '+'))
console.log(currencyOperation(100, 20, '-'))
console.log(currencyOperation(100, 20, 'i'))