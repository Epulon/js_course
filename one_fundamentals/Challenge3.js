//////////Coding Challenge 3//////////
//Test data 1
//Dolphins = 96, 108, 89
//Koalas = 88, 91, 110
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win by ${dolphinsAverage - koalasAverage} points!`)
} else if (dolphinsAverage < koalasAverage) {
    console.log(`Koalas win by ${koalasAverage - dolphinsAverage} points!`)
} else {
    console.log(`Boring draw...`)
}

//Test Data 2
const dolphinsAverage2 = (97 + 112 + 101) / 3;
const koalasAverage2 = (109 + 95 + 123) / 3;
if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log(`Dolphins win by ${dolphinsAverage2 - koalasAverage2} points!`)
} else if (dolphinsAverage2 < koalasAverage2 && koalasAverage2 >= 100) {
    console.log(`Koalas win by ${koalasAverage2 - dolphinsAverage2} points!`)
} else if (dolphinsAverage2 < 100 && koalasAverage2 < 100) {
    console.log(`Boring draw...`)
} else {
    console.log(`Exciting draw!`)
}

//Test Data 3
const dolphinsAverage3 = (97 + 112 + 101) / 3;
const koalasAverage3 = (109 + 95 + 106) / 3;
if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log(`Dolphins win by ${dolphinsAverage3 - koalasAverage3} points!`)
} else if (dolphinsAverage3 < koalasAverage3 && koalasAverage3 >= 100) {
    console.log(`Koalas win by ${koalasAverage3 - dolphinsAverage3} points!`)
} else if (dolphinsAverage3 < 100 && koalasAverage3 < 100) {
    console.log(`Invalid result...`)
} else {
    console.log(`Exciting draw!`)
}