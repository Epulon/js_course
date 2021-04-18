// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Prettier: formats code in standardized way
const x = '23';
//Code snippets
const calcAge = birthYear => 2039 - birthYear;
console.log('Hello World!');
console.log(calcAge(1981));
console.log(calcAge(1985));
console.log(calcAge(1986));
console.log(calcAge(2021));

//Problem:
//Given an array of temperatures of one day, calculate the temperature amplitude. Sometimes there can be an sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Amplitude = highTemp-lowTemp
//Ignore error

//Breaking down:
//-Ignore Errors
//-Find max value in array
//-Find min value in array
//-Subtract min value from max and return it

//const calcTempAmplitude = function (temp) {
//    const max = Math.max(...temp);
//    const min = Math.min(...temp);
//    for (let i=0; i< temp.length; i++) {
//    const amp = (max - min);
//    return amp;
//    }
//}; 
//console.log(`Max temperature: ${Math.max(...temperatures)}`);
//console.log(`Min temperature: ${Math.min(...temperatures)}`);
//console.log(`Temperature amplitude: ${calcTempAmplitude(temperatures)}`);

const calcTempAmplitude = function (temp) {
    
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue; //skip rest of function if type is not a number
        if (temp[i] > max) max = temp[i];
        if (temp[i] < min) min = temp[i];
    }
    const amplitude = max-min;
    console.log(`Maximum temperature = ${max};
Minimum temperature = ${min};
Temperature ampitude = ${amplitude};`);
};
calcTempAmplitude(temperatures);

//Bonus - Function has two arrays
const temperaturesNew = [18,-27,13,1,48];
const temperaturesMerged = temperatures.concat(temperaturesNew);
const calcTempAmplitudeNew = function (temp) {
    
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue; //skip rest of function if type is not a number
        if (temp[i] > max) max = temp[i];
        if (temp[i] < min) min = temp[i];
    }
    const amplitude = max-min;
    console.log(`Maximum temperature = ${max};
Minimum temperature = ${min};
Temperature ampitude = ${amplitude};`);
};
calcTempAmplitudeNew(temperaturesMerged);

//Debugging
//Console
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // 3/ Fix
        value: Number(prompt('Degrees Celsius:')), 
    }
    // 2/ Find
    console.log(measurement);//shows value as a string
    console.table(measurement);
    //console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}
// 1/ Identify the bug
console.log(measureKelvin());

//Debugging pt2
const calcTempAmplitudeBug = function (temp) {
    
    let max = 0;
    let min = 0;

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue; 
//        debugger;
        if (temp[i] > max) max = temp[i];
        if (temp[i] < min) min = temp[i];
    }
    const amplitude = max-min;
    console.log(`Maximum temperature = ${max};
Minimum temperature = ${min};
Temperature amplitude = ${amplitude};`);
};
calcTempAmplitudeBug([3,5,1],[9,4,5]);