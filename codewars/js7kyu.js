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
