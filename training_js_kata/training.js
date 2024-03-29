// Katas list of Training JS series
// https://github.com/myjinxin2015/Katas-list-of-Training-JS-series

// #1: create your first JS function helloWorld
function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}
// #2: Basic data types--Number
var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v3; //set number value to a
  var b = v1; //set number value to b
  return a - b;
}
function equal3() {
  var a = v1; //set number value to a
  var b = v5; //set number value to b
  return a * b;
}
function equal4() {
  var a = v4; //set number value to a
  var b = v5; //set number value to b
  return a / b;
}
function equal5() {
  var a = v6; //set number value to a
  var b = v3; //set number value to b
  return a % b;
}
// #3: Basic data types--String
var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

// #4: Basic data types--Array
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

// #5: Basic data types--Object
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// #6: Basic data types--Boolean and conditional statements if..else
const trueOrFalse = (val) => (val ? "true" : "false");

// #7: if..else and ternary operator
const saleHotdogs = (n) =>
  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;

// #8: Conditional statement--switch
function howManydays(month) {
  var days;
  switch (month) {
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 31;
  }
  return days;
}
// #9: loop statement --while and do..while
function padIt(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}
// #10: loop statement --for
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return [odd, even];
}
// #11: loop statement --break,continue
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length === 3) break;
  }

  return bag;
}
// #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  let res = [];
  for (key in obj) {
    if (key.length === 5) res.push(key);
    if (obj[key].length === 5) res.push(obj[key]);
  }
  return res;
}

// #13: Number object and its properties
// #14: Methods of Number object--toString() and toLocaleString()
// #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// #16: Methods of String object--slice(), substring() and substr()
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// #18: Methods of String object--concat() split() and its good friend join()
// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// #21: Methods of String object--trim() and the string template
// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// #24: methods of arrayObject---splice() and slice()
// #25: methods of arrayObject---reverse() and sort()
// #26: methods of arrayObject---map()
// #27: methods of arrayObject---filter()
// #28: methods of arrayObject---every() and some()
// #29: methods of arrayObject---concat() and join()
// #30: methods of arrayObject---reduce() and reduceRight()
// #31: methods of arrayObject---isArray() indexOf() and toString()
// #32: methods of Math---round() ceil() and floor()
// #33: methods of Math---max() min() and abs()
// #34: methods of Math---pow() sqrt() and cbrt()
// #35: methods of Math---log() and its family
// #36: methods of Math---kata author's lover:random()
// #37: Unlock new weapon---RegExp Object
// #38: Regular Expression--"^","$", "." and test()
// #39: Regular Expression--"?", "*", "+" and "{}"
// #40: Regular Expression--"|", "[]" and "()"
// #41: Regular Expression--""
// #42: Regular Expression--(?:), (?=) and (?!)
