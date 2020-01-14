const readlineSync = require("readline-sync")

var usernum1 = readlineSync.question('enter your first num? ');

var userNum2 = readlineSync.question('Enter your second num? ');

const operations =['add','subtract','devide','multiply']

var userop = readlineSync.keyInSelect(operations,'choose your operation');

if (operations[userop]=== 'add') {
    var total = +usernum1 + +userNum2
    console.log(total)
}
if (operations[userop]=== 'subtract') {
    var total = +usernum1 - +userNum2
    console.log(total)
}
if (operations[userop]=== 'devide') {
    var total = +usernum1 / +userNum2
    console.log(total)
}
if (operations[userop]=== 'multiply') {
    var total = +usernum1 * +userNum2
    console.log(total)
}