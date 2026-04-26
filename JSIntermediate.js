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

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

console.log(unique(colours))

function uniquee(duplicatesArray) {
    result = [];
    for (let i = 0; i < duplicatesArray.length; i++) {
    if (!result.includes(duplicatesArray[i])) {
        result.push(duplicatesArray[i])
    }
    }
}

console.log(unique(colours))

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2000 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    for (let i = 0; i< books.length; i++) {
        if (books[i].id === bookId) {
            return books[i].title
        }
        return "Book not found"
    }
}
console.log(getBookTitle(1))

function getBookTitlee(bookId) {
let matchingBook = books.find(book => book.id == bookId);
return matchingBook ? matchingBook.title : "Book not found"
}
console.log(getBookTitlee(5))

function getBookTitleAuthor(BookAuthor) {
let matchingBook = books.find(book => book.author == BookAuthor);
return  matchingBook ? matchingBook.title :"no book"
}

console.log(getBookTitleAuthor('Harper Lee'));

function getOldBooks(bookYear) {
    let oldBooks = books.filter(book => book.year < 1950)
        return oldBooks
}

console.log(getOldBooks())

//function addGenre() {
  //  let genreAdd = books.map(book.genre ='classic')
   // return genreAdd
//}

//addGenre()

function addGenre() {
books.map(book => book.genre = 'Classic');
}
addGenre();
console.log(books);

function addGenree() {
    return books.map(function(book) {
        return {
            ...book,
            genre: 'Classic'
        }
    })
}
addGenree()

function getTitles(authorInitial) {
return books
.filter(book =>
book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
.map(book => book.title);
}
console.log(getTitles('G'))

function latestBook() {
    let latestYear = books[0].year;

    books.forEach(function(book) {
        if (book.year > latestYear) {
            latestYear = book.year
        }
    }) 

    return books.find(function(book) {
        return book.year === latestYear
    })
}

function latestBook() {
    let latestYear = books[0].year;

    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });

    return books.find(book => book.year === latestYear);
}

console.log(latestBook())

const phoneBookABC = new Map()

phoneBookABC.set('Ahul', '0210401833')
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map()

phoneBookABC.set('Dhul', '0210401833')
phoneBookABC.set('Ennabelle', '0412312343')
phoneBookABC.set('Earry', '0433221117')
phoneBookABC.set('Froline', '0455221182')

console.log(phoneBookABC)

phoneBookABC.set('Caroline', '123456789')

console.log(phoneBookABC)

function printPhoneBook(contacts) {
    for (let entry of contacts)
        console.log(entry)
}
printPhoneBook(phoneBookABC)

function printPhoneBookk(contacts) {
    for (let [name, phone] of contacts) {
        console.log(name + ": " + phone);
    }
}
printPhoneBookk(phoneBookDEF)

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries) {
    total = 0;

    for (let name in salaries) {
        total += salaries[name]
        }
    return total
}

console.log(sumSalaries(salaries))

function topEarner(salaries) {
    let highestSalary = 0;
    let highestEarnerName = '';

    for (let name in salaries) {
        if (salaries[name] > highestSalary) {
            highestSalary = salaries[name];
            highestEarnerName = name;
        }
    }
    return highestEarnerName
}
console.log(topEarner(salaries))

const todayy = new Date()

console.log(todayy) 

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + ' seconds have passed today')

const birthday = new Date('1989-12-25')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

console.log(`I am ${years} years, ${months} months and ${days} days old`)

function daysInBetween(date1, date2) {
let differenceMS = date2 - date1;
let millisecondsPerDay = 24 * 60 * 60 * 1000;
let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
return Math.abs(differenceDays);
}

console.log(`Days between ${birthday.toLocaleDateString()} and
${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`)
console.log(`Days between 2022-01-15 and 2023-01-01: ${daysInBetween(new Date('2023-01-01'), new Date('2022-01-15'))}`)
