'use strict'
////////////////
//Challenge #3//
console.log(` 
//Challenge #3//
 `)
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
//console.log(`${mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName} ${mark.bmi > john.bmi ? mark.lastName : john.lastName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? mark.firstName : john.firstName} ${mark.bmi < john.bmi ? mark.lastName : john.lastName}'s (${mark.bmi > john.bmi ? mark.bmi : john.bmi})`)
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})`);
}