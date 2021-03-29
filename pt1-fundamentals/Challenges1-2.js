///////////////////////
//Coding challenge #1//
//BMI
//Dataset1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);
//Dataset2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(bmiMark2, bmiJohn2, markHigherBMI2);

///////////////////////
//Coding challenge #2//
//Dataset1
if (bmiJohn > bmiMark) {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
} else {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's ${bmiJohn}!`)
}
//Dataset2
if (bmiJohn2 > bmiMark2) {
    console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`)
} else {
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's ${bmiJohn2}!`)
}