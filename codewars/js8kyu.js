// Выполненные задания с сайта codewars.com 8 уровень.

// Sum Numbers
// Сложить все числа в массиве
function sum (numbers) {
    let result = 0.0;
    if (numbers[0]) {
      for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
    }
      return result;
  };

// Return a greeting string
// Вернуть строку с входящим именем.
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

// Removing Elements
/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/
function removeEveryOther(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

// Count of positives / sum of negatives
/*
Return an array, where the first element is the count 
of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    let resultArray = [];
    //console.log(input.length);
    if (Array.isArray(input)) {
      if (input.length > 0) {
        let countPositive = 0;
        let sumNegative = 0;
        for (let i = 0; i < input.length; i++) {
          if (input[i] > 0) {
            countPositive++;
          } else if (input[i] < 0) {
            sumNegative += input[i];
          }
        }
        resultArray.push(countPositive);
        resultArray.push(sumNegative);
      }
    }
      return resultArray;
  }

// Beginner - Reduce but Grow
/* 
Given a non-empty array of integers,
return the result of multiplying the values together in order.
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(x) {
    return x.reduce((mult, n) => mult *= n, 1);
  }

// Abbreviate a Two Word Name
/*
Sam Harris => S.H
patrick feeney => P.F
  */
function abbrevName(name){
    let nameArray = name.split(" ");
    let firstName = nameArray[0];
    let secondName = nameArray[1];
    return firstName[0].toUpperCase() + "." + secondName[0].toUpperCase();
  }

// Convert a string to an array
function stringToArray(string){
    return string.split(" ");
  }

// Count by X
/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
    let result = [];
    for (let i = x; result.length != n; i++) {
      if (i % x == 0) {
        result.push(i);
      }
    }
    return result;
  }
// Find the first non-consecutive number
/*
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8]
then 1 then 2 then 3 then 4 are all consecutive but 6 is not,
so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
*/
function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr [i] != arr[i - 1] + 1) {
        return arr[i];
      }
    }
    return null;
  }

  // I love you, a little , a lot, passionately ... not at all НЕ ПРАВИЛЬНО
  // Любит не любит
  function howMuchILoveYou(nbPetals) {
    let array = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return nbPetals <= 6 ? array[nbPetals - 1] : array[nbPetals - 7];
  }

  // 7kyu Even numbers in an array
  /*
Given an array of numbers, return a new array of length number containing
 the last even numbers from the original array (in the same order).
 The original array will be not empty and will contain at least "number" even numbers.
For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
  */
function evenNumbers(array, number) {
    let temp = [];
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        temp.push(array[i]);
      }
    }
    for (let j = 0; j < number; j++) {
      result.push(temp.pop());
    }
    return result.reverse();
  }