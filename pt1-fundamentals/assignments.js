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