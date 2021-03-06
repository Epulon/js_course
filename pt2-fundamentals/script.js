'use strict';
//////////////////////////////
/////////Strict Mode /////////
console.log(`
//Strict Mode//
 `);

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //strict mode warns if variable spelled wrongly
if (hasDriversLicense) console.log(`I can drive.`);
//const interface = `Audio`;
//const private = 250;
//JS reserved words

//////////////////////////////
///////////Functions//////////
console.log(`
//Functions//
 `);
function logger() {
    console.log(`It's called function not finction`)
}
// calling/running/invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 8));

/////////////////////////////////////////
//Function declarations vs. expressions//
console.log(`
//Function declarations vs. expressions//
 `);
//Function declaration
function calcAge1(currYear, birthYear) {
    return (Number(currYear) - Number(birthYear));
}

const age1 = calcAge1(2021, 1975);
console.log(`Cillian is ${age1} years old.`)
console.log(`Cillian is ${calcAge1(2021, 1975)} years old`);

//Function expression
const calcAge2 = function (currYear, birthYear) {
    return (Number(currYear) - Number(birthYear));
}
console.log(`Beowolf is ${calcAge2(2021, 1986)} years old.`);

//ArrowFunction//
console.log(`//Arrow Function//`);
const calcAge3 = birthYear => 2021 - birthYear
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (currYear, birthYear, firstName) => {
    const age = (Number(currYear) - Number(birthYear));
    const retirement = (65 - Number(age));
    const name = firstName;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2021, 1981, 'Zizi'));
console.log(yearsUntilRetirement(2021, 1986, 'Dodo'));
console.log(yearsUntilRetirement(2021, 2021, 'Zozo'));

/////////////////////////////////////////
////Functions calling other functions////
console.log(`
//Functions calling other functions//
 `);

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice2 = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice2;
}

console.log(fruitProcessor2(2, 3));

/////////////////////////////////////////
////////////Functions review/////////////
console.log(`
//Functions review//
 `);
const calcAge4 = function (curr, birth) {
    return (Number(curr - birth));
}
const yearsUnitlRetirement2 = function (currYear, birthYear, firstName) {
    const age4 = calcAge4(currYear, birthYear);
    const retirement2 = 65 - age4;

    if (retirement2 > 0) {
        return retirement2;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirement2} years.`;
}
console.log(yearsUnitlRetirement2(2021, 1955, 'Epulon'));
console.log(yearsUnitlRetirement2(2021, 1985, 'Branko'));

/////////////////////////////////////////
/////////Introduction to arrays//////////
console.log(`
//Introduction to Arrays//
 `);

const friends = ['Michael', 'Stephen', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2005, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //last element in the array

friends[2] = 'Jay'; //change data within Array (only one)
console.log(friends);

const firstName = 'Epulon';
const Epulon = [firstName, 'Skutter', 2021 - 1936, 'aspiring web developer', friends];
console.log(Epulon);
console.log(Epulon.length);

//Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years2 = [1980, 1967, 2002, 2010, 2018];

console.log(calcAge(years2)); //returns NaN - cant include entire array
const age5 = calcAge(years2[0]);
const age6 = calcAge(years2[1]);
const age7 = calcAge(years2[years2.length - 1]);
console.log(age5, age6, age7);
console.log(years2);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

/////////////////////////////////////////
/////////Basic Array operations//////////
console.log(`
//Basic Array operations//
 `);

//Add element to the end of array 'friends'
friends.push('Branko');
console.log(friends);

//Add element to the begining of the array
friends.unshift('Martin');
console.log(friends);

//Remove last element from array
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(popped);

//Remove first element from the array
friends.shift();
console.log(friends);

//Locate position of element within array
console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

//Check if element is within array
console.log(friends.includes('Stephen'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Stephen')) {
    console.log(`You have a friend called Stephen`);
} else {
    console.log(`Its a sad life when you dont know Stephen`)
}

/////////////////////////////////////////
/////////Introduction to objects/////////
console.log(`
//Introduction to objects//
 `);

//object litteral syntax
const epulon = {
    firstName: 'Epulon',
    lastName: 'Epulonix',
    age2: 2021 - (-187),
    job: 'king',
    friends: ['Vercingetorix', 'Teuta', 'Boudica', 'Hanibal']
};
console.log(epulon);

/////////////////////////////////////////
/////////Dot vs Bracket notation/////////
console.log(`
//Dot vs Bracket notation//
 `);

//Dot notation
console.log(epulon.lastName);
//Bracket notation  
console.log(epulon['lastName']);

const nameKey = 'Name';

console.log(epulon['first' + nameKey]);
console.log(epulon['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Epulon? Choose between firstName, lastName, age2, job and friends.')
console.log(epulon.interestedIn); //dot notation returns undefined because there is no property nemed interestedIn
if (epulon[interestedIn]) { //if value is true (existsin objectcode is executed)
    console.log(epulon[interestedIn]);
} else {
    console.log('Invalid value. Choose between firstName, lastName, age2, job and friends.');
}

//Adding new properties
//Dot notation
epulon.location = 'Dublin';
//Bracket notation
epulon['mastodon'] = '@epulon@noc.social';
console.log(epulon);

//Challenge
console.log(`${epulon['firstName']} has ${epulon.friends.length} friends, and his best friend is called ${epulon.friends[1]}`);

/////////////////////////////////////////
/////////////Object Methods//////////////
console.log(`
//Object Methods//
 `);

const mcnenno = {
    firstName: 'Epulon',
    lastName: 'McNenno',
    birthYear1: 1980,
    job: 'designer',
    friends: ['Matija', 'Kristijan', 'Martina', 'Vanja'],
    driversLicence: true,
    //Requires manual birthyear input instead of caling it from the object
    //calcAge5: function (birthYear1) {
    //    return 2021 - birthYear1;
    //}

    //Computes age every time is called, in case of heavier calculations that my take some time
    //calcAge5: function () {
    //    return 2021 - this.birthYear1;
    //}

    //Computes the age once and stores it as a new property in the current object

    calcAge6: function () {
        this.agex = 2021 - this.birthYear1;
        return this.agex;
    },
    summary: function () {
        return `${this.firstName} is a ${this.calcAge6()} years old ${this.job} and he ${this.driversLicence ? 'has' : "doesn't have"} a drivers licence.`;
    }
}
console.log(mcnenno);
console.log(mcnenno.agex)
mcnenno.calcAge6();//property needs to be calculated before we can call it
console.log(mcnenno.agex);
console.log(mcnenno);

//Challenge summary
console.log(mcnenno.summary());

/////////////////////////////////////////
/////////Iteration: The For Loop/////////
console.log(`
//Iteration: The For Loop//
 `);

//Manual repetion
//console.log(`Lifting weights repetition 1`);
//console.log(`Lifting weights repetition 2`);
//console.log(`Lifting weights repetition 3`);
//console.log(`Lifting weights repetition 4`);
//console.log(`Lifting weights repetition 5`);
//console.log(`Lifting weights repetition 6`);
//console.log(`Lifting weights repetition 7`);
//console.log(`Lifting weights repetition 8`);
//console.log(`Lifting weights repetition 9`);
//console.log(`Lifting weights repetition 10`);
//loop counter
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

///////////////////////////////////////////
//Looping Arrays, Breaking and Continuing//
console.log(`
//Looping Arrays, Breakign and Continuing//
 `);

const epulonArray = [
    'Epulon',
    'Epulonix',
    2021 - (-187),
    'king',
    ['Vercingetorix', 'Teuta', 'Boudica', 'Hanibal'],
    'Ugo'
];
console.log(epulonArray);

const types = [];

for (let i = 0; i < epulonArray.length; i++) {
    //Reading from epulonArray array
    console.log(epulonArray[i], typeof epulonArray[i])
    //filling types array
    //types[i] = typeof epulonArray[i];
    types.push(typeof epulonArray[i]);
}

console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const ages1 = [];

for (let i = 0; i < years1.length; i++) {
    ages1.push(2021 - years1[i]);
}

console.log(ages1);

//Continue and break statements
console.log(` 
//Continue & Break//
 `)
//Continue-exit current iteration of the loop and proceed to the next one.
//Break-competely terminate whole loop
console.log('---continue---')
for (let i = 0; i < epulonArray.length; i++) {
    if (typeof epulonArray[i] !== 'string') continue;

    console.log(epulonArray[i], typeof epulonArray[i])
}

console.log('---break---');
for (let i = 0; i < epulonArray.length; i++) {
    if (typeof epulonArray[i] === "number") break;

    console.log(epulonArray[i], typeof epulonArray[i])
}

///////////////////////////////////////////
////Looping backwards and loops in loops///
console.log(`
//Looping backwards and loops in loops//
 `);

console.log('//Looping backwards//');

for (let i = epulonArray.length - 1; i >= 0; i--) {
    console.log(i, epulonArray[i]);
}
console.log('//Loops in loops//');

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`------ Starting Excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise} lifting weights repetition ${rep}`)
    }
}

///////////////////////////////////////////
////The While Loop///
console.log(`
//The While Loop//
 `);
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetiton ${rep}.`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
if (dice === 6) console.log('Wow, 6 on first try!')
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Congrats, you rolled a 6!!`);
}