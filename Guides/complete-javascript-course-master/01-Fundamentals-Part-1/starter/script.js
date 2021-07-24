// let js = 'amazing';
// console.log(40 + 8 + 23 -10);

// // value is a piece of data 'jonas' this is a value.
// console.log('jonas');
// console.log('23');

// //  value smallest unit of information can be stored in variable and be reused.
// let firstName = "Matilda";

// // fisrtname is a variable which store the value jonas.
// console.log (firstName);
// console.log (firstName);
// console.log (firstName);

// // variables should be descriptive i.e. like below.
// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// Assignment_01 values and variables

/*
let country = 'Kenya';
let continent = 'Africa';
let population = '20,000,000';

console.log (country);
console.log (continent);
console.log(population);
*/

/* 
Data types:- Number,Strings,Boolean,Undefined,Null,symbol,Bigint.
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined data_type
let year;
console.log (year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// bug or error declared as an object which is wrong
console.log(typeof null);
*/

/*
 Declaring varibles:>

// using let.
// you can use let to declare empty variables.

let age = 30;

// Reassigning the the variable/ mutating the variable.
age = 31;

// using const.
// used to declare varibles that are not supposed to change.
// they are immutable.
// you can not use const to declare an empty variable.
const birthYear = 1991;
// birthYear = 1990;
// const job;

// using var (old way of defining variables)

var job = 'programmer';
job = 'teacher';

// always define variables very well
// lastName = 'victor';
// console.log(lastName);

*/

// BASIC_OPERATORS
const now = 2021;
const ageJones = now - 1991;
const ageSarah = now - 2019;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3)
// 2 ** 3 represents 2 to the power of 3.

const firstName = 'jonas';
const lastName = 'dan';
// The + operator can be used to join up two strings.
// joining strings (concantating)
console.log(firstName + ' ' + lastName);

let x =  10 + 5; // =10.
x += 10;  // x = x + 10 = 25.
x *=4; // multiplies  X by 4 = 100.
// Increasing x by one.
x ++;
// Reducing x by one.
x --;
x --;

// X to the console.
console.log(x);


// COMPARISON OPERTORS.
console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);

//isFullAge is a boolean since its comparing true or false.
const isFullAge = ageSarah >=18;

console.log(now - 1991 > now - 2018);



