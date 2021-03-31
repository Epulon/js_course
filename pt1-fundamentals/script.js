//////////////////////////////
//Linking a JavaScript file///
console.log(`//Linking a JavaScript file//
 `);
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//////////////////////////////
/////Values and Variables/////
console.log(`//Values and Variables//
 `);
console.log('Epulon');
console.log(50);

let firstName = 'Epulon';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let neno_doris = 'Zoe';
let $function = 27;

let person = 'epulon';
let PI = 3.1415;

let myFirstJob = 'Electrician';
let myCurrentJob = 'Designer';

let job1 = 'Electrician';
let job2 = 'Designer';

console.log(myFirstJob);
//////////////////////////////
//////////Data types//////////
console.log(`//Data types//
 `);
//Number
let age = 23;
//String
let nickName = 'Epulon';
//Boolean
let fullAge = true;
//Undefined
let crypto;
console.log(crypto);
console.log(typeof crypto);
crypto = 'ada';
console.log(crypto);
console.log(typeof crypto);
//Null bug - should not be type object
console.log(typeof null);
//Comments
/*
Multiline
comments
*/
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
//Testing typeof command
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Epulon');
//changing variable type from boolean to string
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

//////////////////////////////
///////let, const & var///////
console.log(`//let, const & var//
 `);
//let - for variable that can be changed in the future (mutable)
let years = 30;
console.log(years);
years = 35;
console.log(years);
//const - for variable that cannot be changed (immutable)
const birthYear = 1990;
console.log(birthYear);
//birthYear = 1970;
//console.log(birthYear);
// var
var someName = 'Eoghan';
console.log(someName);
someName = 'Eejit';
console.log(someName);

//////////////////////////////
///////Basic operators////////
console.log(`//Basic operators//
 `);
//Mathematical operators
const yearOfBirthEpulon = 1985;
const yearOfBirthBoris = 1997;
let currYear = 2035;
console.log(currYear - yearOfBirthEpulon, currYear - yearOfBirthBoris);
currYear = 2028;
console.log(currYear - yearOfBirthEpulon, currYear - yearOfBirthBoris);
//Mltiplication, Division, Power
console.log(yearOfBirthEpulon * 3, yearOfBirthEpulon / 2, yearOfBirthEpulon ** 4);
//Strings
let foreName = 'Epulon';
let secondName = 'Epularis';
const spacer = ' ';
console.log(foreName + spacer + secondName, foreName - secondName, foreName * secondName, foreName / secondName);
//Assignment Operators
let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // 100
console.log(x);
x /= 2; // 50
console.log(x);
x -= 20; // 30
console.log(x);
x++; // x + 1 = 31
console.log(x);
x--; // x - 1 = 30
console.log(x);
// Comparison operators >, <, <=, >=
console.log(yearOfBirthBoris > yearOfBirthEpulon);
console.log(yearOfBirthEpulon <= 2003);
const isFullAge = yearOfBirthEpulon <= 2003;

//////////////////////////////
/////Operator precedence//////
console.log(`//Operator precedence//
 `);
let now = 2050;
const ageMirko = now - 1945;
const ageSlavko = now - 1991;
console.log(now - 1945 > now - 1991);
let m, s;
m = s = 25 - 10 - 5;
console.log(m, s);
const averageAge = (ageMirko + ageSlavko) / 2;
console.log(ageMirko, ageSlavko, averageAge);

/////////////////////////////////
//Strings and template literals//
console.log(`//Strings and template litelars//
 `);
const job = 'aspiring web developer';
const year = 2021;
const description2 = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';
console.log(description2);
//Template literals - using backticks ` instead of quotes '' & ""
const description3 = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(description3);
//Miltiline string
console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple lines
using template literals`);

/////////////////////////////////
///////if/else statements////////
console.log(`//if/else statements//
 `);
const driversAge = 15;
if (driversAge >= 18) {
    console.log('Rudi can start driving');
} else {
    const yearsLeft = 18 - driversAge;
    console.log(`Rudi is too young. Wait another ${yearsLeft} years :)`);
};
const birthYear2 = 2001;
let century;
if (birthYear2 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

/////////////////////////////////////////
///////Type conversion & coercion////////
console.log(`//Type conversion & coercion//
 `);
//type conversion
const inputYear = '1991';
console.log(typeof inputYear);
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number('Epulon'));
console.log(typeof NaN);
console.log(String(23), 23);
//type coercion
//automatic conversion of numbers to strings
console.log(`I am ` + 23 + ` years old.`);
console.log(`I am ` + `23` + ` years old.`);
console.log(`I am ` + String(23) + ` years old.`);
console.log(String(23) - `10` - 3);//- converts strings to numbers
console.log(String(23) + '10' + 3);//+ converts numbers to strings
console.log(String(23) * `2`);
console.log(String(23) / `2`);
console.log(`23` > '18');

let n = `1` + 1;//string '11'
n = n - 1;//
console.log(n);
console.log(2 + 3 + 4 + `5`);//adding left to right 2+3+4+`5`=5+4+`5`=9+`5`=`95`
console.log(`10` - `4` - `3` - 2 + `5`);//subtracting left to right `10`-`4`-`3`-2+`5`=6-`3`-2+`5`=3-2+`5`=1+`5`=`15`

/////////////////////////////////////
///////Truthy & Falsy values////////
console.log(`//Truthy & Falsy values//
 `);
//Falsy: values that are not false but will become false if converted to boolean (0, ``(empty string), undefined,null, NaN)
console.log(Boolean(0));//zero
console.log(Boolean(5));//number
console.log(Boolean(``));//empty string
console.log(Boolean(`Epulon`));//string
console.log(Boolean(undefined));//undefined
console.log(Boolean(null));//null
console.log(Boolean(NaN));//NaN
console.log(Boolean({}));//empty object
const money = 0;//0 is a flasy value
if (money) {//if statement converts condition to boolean
    console.log(`Don't spend it all;)`);//if condition is true
} else {//else, if condition is false
    console.log(`You should get a job!`);
}
//Checking if variable is defined
let height;//undefined
if (height) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is not defined.`);
}
let height1 = 100;//defined
if (height1) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is not defined.`);
}
let height2 = 0;//defined as 0 but returns as undefined
if (height2) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is not defined.`);
}

/////////////////////////////////////
////Equality operators: ==VS.===/////
console.log(`//Equality operators: ==VS.===//
 `);
const age1 = 18;
if (age1 === 18) console.log(`You just became and adult :D`);
console.log(18 === 18);
console.log(18 === 19);
console.log(18 === `18`);
console.log(20 == 20);
console.log(20 == 21);
console.log(20 == `20`);
const favourite = Number(prompt(`What is your favourite number?`));//Convert prompt into Number type
console.log(favourite);
console.log(typeof favourite);
console.log(`//////////else if//////////`);
if (favourite === 23) {
    console.log(`23 is a cool number!`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number.`)
} else {
    console.log(`Not cool dude!`)
}
//Unequal
if (favourite !== 23) {
    console.log(`Why not 23 or 7??`)
}

/////////////////////////////////////
/////////Logical operators///////////
console.log(`//Logical operators//
  `);

const hasDriversLicence = true;
const hasGoodVision = true;
console.log(hasDriversLicence && hasGoodVision); // && and
console.log(hasDriversLicence || hasGoodVision); // || or
console.log(!hasDriversLicence); //! not
console.log(!hasGoodVision);
console.log(!hasDriversLicence && !hasGoodVision);
console.log(hasDriversLicence && !hasGoodVision);

const shouldDrive = hasDriversLicence && hasGoodVision;
if (shouldDrive) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Sara shouldn't drive.`)
}
const isTired = false;
if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log(`Sarah can drive.`)
} else {
    console.log(`Someone else should drive...`)
}

////////////////////////////////////////
/////////The switch statement///////////
console.log(`
//The switch statement//
 `);

const day = `thursday`;
switch (day) {
    case `monday`:
        console.log(`Do nothing`);
        console.log(`Just chill`);
        break;
    case `tuesday`:
        console.log(`Rest`);
        break;
    case `wednesday`:
        console.log(`Take a break`);
        break;
    case `thursday`:
        console.log(`Buy groceries`)
        console.log(`Rest from shopping`)
        break;
    case `friday`:
        console.log(`Wait for the weekend`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Finally weekend so I can rest`);
        console.log(`Dread Monday`);
        break;
    default:
        console.log(`Hwat?`)
}
//if/else comparison
if (day === `monday`) {
    console.log(`Do nothing`);
    console.log(`Just chill`);
} else if (day === `tuesday`) {
    console.log(`Rest`);
} else if (day === `wednesday`) {
    console.log(`Take a break`);
} else if (day === `thursday`) {
    console.log(`Buy groceries`);
    console.log(`Rest from shopping`)
} else if (day === `friday`) {
    console.log(`Wait for the weekend`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Finally weekend so I can rest`);
    console.log(`Dread Monday`);
} else
    console.log(`Hwat?`);

////////////////////////////////////////
///////Statements & Expressions/////////
console.log(`
//Statements & Expressions//
 `);

console.log(`Not much to say here`);

////////////////////////////////////////
///The conditional (ternary) operator///
console.log(`
//The conditional (ternary) operator//
 `);

const age2 = 26;
age2 >= 18 ? console.log(`I'd like to drink beer`) : console.log(`I'd like to drink water`);

const drink = age2 >= 18 ? `wine` : `water`;
console.log(`I'd like to have ${drink} please.`);
//If/else for comparison
let drink2;
if (age2 >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water;`
}
console.log(drink2);

//Using ternary within template literal
console.log(`I'd like to drink ${age >= 18 ? `wine` : `water`} please.`);