/////////////
//Functions//

function describeCountry(country, population, capital) {
    return `${country} has ${population} million people and its capital is ${capital}.`
}

const roi = describeCountry('Ireland', 4.7, 'Dublin');
const cro = describeCountry('Croatia', 4, 'Zagreb');
const esp = describeCountry('Spain', 47.4, 'Madrid');
console.log(roi, cro, esp);

///////////////////////////////////////
//Function Declaration vs. Expression//
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const roi1 = percentageOfWorld1(4.7);
const cro1 = percentageOfWorld1(4);
const esp1 = percentageOfWorld1(47.4);
console.log(`Ireland has ${roi1}% of world population`);
console.log(`Croatia has ${cro1}% of world population`);
console.log(`Spain has ${esp1}% of world population`);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}