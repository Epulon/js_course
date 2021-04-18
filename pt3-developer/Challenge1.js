'use strict';

const dataset1 = [17,21,23];
const dataset2 = [12,5,-5,0,4];

//const printForecast = function (arr) {
//    const print = [];
//    for (let i = 0; i < arr.length; i++) {
//        const string = `...${arr[i]}°C in ${i+1} days...`;
//        print.push(string); 
//    }
//    return print
//}

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i+1} days ... `;
    }
    return str;
}

console.log(`... ${printForecast(dataset1)}`);
console.log(`... ${printForecast(dataset2)}`);