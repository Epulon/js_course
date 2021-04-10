'use strict';
////////////////
//Challenge #1//
console.log(` 
//Challenge #1//
 `)
const calcAverage = (d1, d2, d3) => (d1 + d2 + d3) / 3;

function checkWinner(a, b, c, d, e, f,) {
    const avgDolphins = calcAverage(a, b, c,);
    const avgKoalas = calcAverage(d, e, f,);
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`Invalid result.`);
    }
}
checkWinner(44, 23, 71, 65, 54, 49);
checkWinner(85, 54, 41, 23, 34, 27);