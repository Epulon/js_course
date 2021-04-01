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

const yearsUntilRetirement = (currYear, birthYear) => {
    const age = (Number(currYear) - Number(birthYear));
    const retirement = (65 - Number(age));
    return retirement;
}
console.log(yearsUntilRetirement(2037, 1991));