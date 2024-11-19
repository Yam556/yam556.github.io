let fullName = 'Alex lee';

const surName = 'Lee';
let firstNum = 101;
let secondNum = 102;
let sum = firstNum + secondNum;

// let num1 = prompt('Enter first number: ');
// let num2 = prompt('Enter second number: ');
// alert(`sum of ${num1} and ${num2} is: ${parseInt(num1) + parseInt(num2)}`);

let nameLength = fullName.length;
console.log(fullName.charAt(0));
console.log(fullName.charAt(fullName.length - 1));

console.log(fullName.concat(' ', surName));
console.log(fullName.substring(fullName.indexOf(' '), fullName.length));

const fullNameWithMiddleName = 'Alex Li Chen';

//print first name
console.log(
  fullNameWithMiddleName.substring(0, fullNameWithMiddleName.indexOf(' '))
);

//print Middle Name
console.log(
  fullNameWithMiddleName.substring(
    fullNameWithMiddleName.indexOf(' '),
    fullNameWithMiddleName.indexOf(' ')
  )
);

//number function
//pareseInt
//parseFloat -- used  to convert strings in to the number;

let tip = '20.50';
let tipPerStaff = parseFloat(tip) / 5;
console.log('tipPerStaff', tipPerStaff.toFixed(2));
console.log('tipPerStaff', typeof tipPerStaff, typeof tipPerStaff.toString());

let veryBigNumber = 3827586587256875628762876n;
let veryBigInt = 27598578957475295;

console.log(veryBigNumber, veryBigInt);

//Boolean
let isMarried = true;
let isStudent = false;

console.log(3 > 20);
console.log('Alex' == 'alex');
console.log(0 !== '0');
console.log(!!'Yam');
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

console.log(!!parseInt(fullName));

//falsy value
/*
0
-0
""
null
undefined 
NaN
*/
//NaN
console.log('cat' * 45);
//string multiply to number is NaN. if there is number in string then it will convert into number and it will multiply.

//undefined
let pet;
console.log(pet);
//if variable doesnot contain any value then it will be undefined as we havenot defined value;

//null
let student = {};
student = null;
console.log(student);

//symbol data type

let symbol1 = Symbol('sandesh');
let symbol2 = Symbol('sandesh');

console.log(symbol1 === symbol2);
//false

console.log(symbol1, typeof symbol2);

//objects
let subject = {
  name: 'Intro to Javascript',
  intro: 'small intro to the beginibng of the javascript',
  price: 1000,
  writer: 'Yam Khadka',
};
console.log(subject, typeof subject);
//inside object we cant use = sign to assign the value

subject.name = 'lets learn javascript';
console.log(subject);

//Array

const fruits = ['apple', 'Banana', 'Orange', 'Mango'];
console.log(fruits, typeof fruits, fruits[fruits.length - 1]);
// for array to get an item we need to use big bracket[] to get result.
fruits[0] = 'Grapes';
console.log(fruits);
//since it is non-primitive datatype we can change the values lateron as well.

//scope
/*
-global
-module scope
-function scope
-block scope
*/

//arthmetic operations
//   + - * /

let a = 50;
let b = 60;
let c = a - b; // this is operations
let d = a + b;
let e = a / b;
let f = c / d;
let g = a * b;
let h = b % a;
let i = a - b + c * d; //it is a expressions
let j = a++;
let k = a--;
console.log(a, b, c, d, e, f, g, h, i, j, k);

//unary operators
// ++, --
