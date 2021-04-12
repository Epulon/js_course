'use strict'
////////////////
//Challenge #4//
console.log(` 
//Challenge #4//
 `)

const calcTips = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.2);
    }
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
    tips1.push(calcTips(bills1[i]));
    totals1.push(bills1[i] + tips1[i]);
}

console.log(bills1, tips1, totals1);