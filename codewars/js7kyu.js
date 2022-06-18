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