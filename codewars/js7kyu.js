// Length and two values.
/*
    Given an integer n and two other values,
    build an array of size n filled with these two values alternating.
    Examples
    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []
*/
function alternate(n, firstValue, secondValue){
    let arr = [];
    let value = firstValue;
    for (let i = 0; i < n; i++) {
      arr.push(value);
      value = value === firstValue ? secondValue : firstValue;
    }
    return arr;
  }

  // Evens and Odds
  /*
    This kata is about converting numbers to their binary or hexadecimal representation:
    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.
    Numbers will be positive. The hexadecimal string should be lowercased.
  */
    let evensAndOdds = num => (num % 2 == 0) ? num.toString(2) : num.toString(16);

    //Do you know how to make Query String?
    /*
    toQueryString({ foo: 1, bar: [ 2, 3 ] }) // => "foo=1&bar=2&bar=3"
    */
    function toQueryString (obj) {
        let result = '';
        for (let key in obj) {
          if ((typeof obj[key]) == "object") {
            for (let i = 0; i < obj[key].length; i++) {
              result += `${key}=${obj[key][i]}&`;
            }
          } else {
            result += `${key}=${obj[key]}&`;
          }
        }
        return result.slice(0, -1);
      }


// Get the Middle Character
/*
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("A") should return "A"
*/
      const getMiddle = s => (s.length % 2 == 0) ? s.substr(s.length / 2 - 1, 2) : s[Math.floor(s.length / 2)];


// Rock Paper Scissors Lizard Spock
      function rpsls(pl1,pl2){
        let result = "";
        if (pl1 === "paper" && (pl2 === "rock" || pl2 === "spock")) {
          result = "Player 1 Won!";
        } else if (pl1 === "scissors" && (pl2 === "paper" || pl2 === "lizard")) {
          result = "Player 1 Won!";
        } else if (pl1 === "rock" && (pl2 === "lizard" || pl2 === "scissors")) {
          result = "Player 1 Won!";
        } else if (pl1 === "lizard" && (pl2 === "spock" || pl2 === "paper")) {
          result = "Player 1 Won!";
        } else if (pl1 === "spock" && (pl2 === "scissors" || pl2 === "rock")) {
          result = "Player 1 Won!";
        } else if (pl1 === pl2) {
          result = "Draw!";
        } else {
           result = "Player 2 Won!";
         } 
        return result;
      }

      function rpsls(pl1,pl2){
        const winner = {
          scissors: ["paper", "lizard"],
          paper: ["rock", "spock"],
          rock: ["lizard", "scissors"],
          lizard: ["spock", "paper"],
          spock: ["scissors", "rock"]
        };
        
        if (pl1 == pl2) {
          return "Draw!";
        }
        return winner[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!";
      }

// Maximum Length Difference
// You are given two arrays a1 and a2 of strings. 
// Each string is composed with letters from a to z. 
// Let x be any string in the first array
// and y be any string in the second array.
// Find max(abs(length(x) − length(y)))
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


function mxdiflg(a1, a2) {
  let result = -1;
  let temp;
    for (let i = 0; i < a1.length; i++) {
      for (let j = 0; j < a2.length; j++) {
        temp = Math.abs(a1[i].length - a2[j].length);
        result = temp > result ? temp : result;
      }
    }
  return result;
}
// не мое решение
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

// sPoNgEbOb MeMe
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
function spongeMeme(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    result += (i + 1) % 2 == 0 ? sentence[i].toLowerCase() : sentence[i].toUpperCase();
  }
  return result;
}

let spongeMeme = sentence => 
        Array.from(sentence).reduce((str, word) => 
                str += ((str.length + 1) % 2 == 0) ? 
                word.toLowerCase() : word.toUpperCase(), "");


// GA-DE-RY-PO-LU-KI cypher
// The GADERYPOLUKI is a simple substitution cypher
// used in scouting to encrypt messages.
// The encryption is based on short, easy to remember key. 
// The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".
//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.

function encode(str) {
  //GA-DE-RY-PO-LU-KI
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A': result += "G"; break;
      case 'a': result += "g"; break;
      case 'E': result += "D"; break;
      case 'e': result += "d"; break;
      case 'Y': result += "R"; break;
      case 'y': result += "r"; break;
      case 'O': result += "P"; break;
      case 'o': result += "p"; break;
      case 'U': result += "L"; break;
      case 'u': result += "l"; break;
      case 'I': result += "K"; break;
      case 'i': result += "k"; break;
      case 'G': result += "A"; break;
      case 'g': result += "a"; break;
      case 'D': result += "E"; break;
      case 'd': result += "e"; break;
      case 'R': result += "Y"; break;
      case 'r': result += "y"; break;
      case 'P': result += "O"; break;
      case 'p': result += "o"; break;
      case 'L': result += "U"; break;
      case 'l': result += "u"; break;
      case 'K': result += "I"; break;
      case 'k': result += "i"; break;
      default: result += str[i]; break;
    }
  }
    console.log(result);
    return result;   
}

let decode = str => encode(str);  


//Basics 04: Rotate Matrix
// Your task is to rotate a matrix 90 degree to the left. 
// The matrix is an array of integers with dimension n,m. 
// So this kata checks some basics, it's not too difficult.

// One easy example:

// Input: {{-1, 4, 5},
//         { 2, 3, 4}}

// Output: {{ 5, 4},
//          { 4, 3},
//          {-1, 2}}

const rotateMatrix = arr => {
  let  newArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      newArr[i].push(arr[j][arr[0].length - 1 - i]);
    }
  }
  return newArr;
}



// The highest profit wins!
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]
const minMax = arr => [Math.min(...arr), Math.max(...arr)];



// Simple Moon Rating
// When you look at movie ratings,
// you usually see it as decimal numbers representing
// average of all viewers' votes. While it is very informative, it's not
// very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating,
// which is in range 0-10, into 5-moons scale.
// Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

function moonRating(rating) {
  let result = '';
  
   if (rating - Math.floor(rating) == 0.6) {
     rating = Math.floor(rating) + 0.5;
   } else if (rating - Math.floor(rating) == 0.5) {
     rating += 0.5;
   } else if (rating - Math.floor(rating) < 0.5) {
     rating = Math.floor(rating);
   } else {
     rating = Math.ceil(rating);
   }
  
    let o = Math.floor(rating / 2);
    let c = Math.ceil(rating / 2 - o);
    let x = 5 - (o + Math.ceil(c));
    console.log(`o = ${o} c = ${c} x = ${x}`);

    for (let i = 0; i < o; i++) {
      result += 'o';
    }
    for (let i = 0; i < c; i++) {
        result += 'c';
      }
    for (let i = 0; i < x; i++) {
        result += 'x';
      }
    return result;
}