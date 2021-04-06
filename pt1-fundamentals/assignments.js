console.log(`////////////////////
////Assignments/////`);
////////////////////////////
/////Values & Variables/////
let country = 'Croatia';
let continent = 'Europe';
let population = 4.5;
console.log(country);
console.log(continent);
console.log(population);

////////////////////////////
/////////Data types/////////
const isIsland = false;
let language;
console.log(isIsland);
console.log(language);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////////////////////////
//////let, const & var//////
language = 'Croatian';
console.log(language);

////////////////////////////
///////Basic operators//////
console.log(population / 2);
population++;
console.log(population);
population--;
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
console.log(description1);

///////////////////////////////
//Strings & template literals//
console.log(`${country} is in ${continent},and its ${population} million people speak ${language}.`);

////////////////////////////
/////if/else statements/////
if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`)
};

////////////////////////////
//Conversion and Coercion///
console.log(`9` - `5`); //=4
console.log(`19` - `13` + `17`); //=617
console.log(`19` - `13` + 17); //=23
console.log(`123` < 57); //false
console.log(5 + 6 + `4` + 9 - 4 - 2); //=117x =1143

//////////////////////////////////
//Equality Operators: == vs. ===//
const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
if (numNeighbours === 1) {
    console.log(`Only 1 border`);
} else if (numNeighbours > 1) {
    console.log(`More than one border.`)
} else {
    console.log(`No borders`)
}

//////////////////////////////////
/////////Logical Operators////////
const count = (prompt(`What is the name of your country?`));
const lang = (prompt(`What language is spoken in your country?`));
const pop = Number(prompt(`What is the population of your country?`));
const island = (prompt(`Is your country an island?
(y/n)`));
if (lang === 'English' || lang === 'english' || lang === 'eng' && pop < 50000000 && island === 'n') {
    console.log(`Lovely, Sarah should come live in ${count}!`);
} else {
    console.log(`Nah, Sarah is very picky, ${count} is not good enough for her sadly.`)
}

//////////////////////////////////
///////The switch statement///////
switch (lang) {
    case 'mandarin':
    case 'chinese':
        console.log('MOST number of native speakers')
        break;
    case 'spanish':
        console.log('2nd most spoken language')
        break
    case 'english':
        console.log('3rd most spoken language')
        break
    case 'hindi':
        console.log('4th most spoken language')
        break
    case 'arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log(`${lang} is an interesting language`)
}

//////////////////////////////////////
//The conditional (Ternary) operator//
console.log(`${count}'s population is ${pop > 33000000 ? 'above' : 'below'} average`);