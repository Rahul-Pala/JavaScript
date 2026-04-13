let Hello = "Hello World"
console.log(Hello)

let hello1 = "hell0"
console.log(hello1)

const basketballGame = {
score: 0,
fouls: 0,
freeThrow() {
this.score++;
return this; 
},
basket() {
this.score += 2;
return this;
},
threePointer() {
this.score += 3;
return this;
},
foul() {
    this.fouls++;
    return this;
},
halfTime() {
console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).');
return this;
},
fullTime() {
    console.log('Fulltime score is '+this.score+' ('+this.fouls+' fouls).');
    return this;
}
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime().foul();

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}

const melbourne= {
name: 'Melbourne',
population: 56121_000,
state: 'VIC',
founded: '26 January 1788',
timezone: 'Australia/Melbourne'
}

function Sydney(){
for (let key in sydney) {
console.log(key);
console.log(sydney[key])
}
}


function printCityProps(cityObject) {
    for (cityProp in cityObject) {
        console.log(cityProp + ' = ' + cityObject[cityProp])
    }
}

printCityProps(sydney)
Sydney(sydney)

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Rugby')

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Bluey';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat2.name = 'Snuggles'

console.log(teamSports) //has changed - because arrays are stored by reference, and
//moreSports points to the same memory location as teamSports

console.log(dog1) //no change - because primitives like strings are stored by value, and
//the values are different

console.log(cat1) //has changed - because objects are stored by reference, and cat2
//points to the same memory location

let moreSports2 = [...teamSports]
moreSports2.push('Netball')
console.log(teamSports) //doesn't include Netball because moreSports2 was created using a
//shallow clone

let cat3 = {...cat1}
cat3.name = 'Humperdinck'
console.log(cat1) // still set to Snuggles because cat3 was created using a clone that
//references a different memory location

let cat4 = structuredClone(cat1)

function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
this.canDrive = () => this.age > 16;
}

let Person1 = new Person('John', 30)
let Person2 = new Person('Jane', 40)
console.log(Person)
console.log(Person1)
console.log(Person2)

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age > 16;
    }
}

let person3 = new PersonClass('Alice' , 28)

console.log(person3)



