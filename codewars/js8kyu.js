// Выполненные задания с сайта codewars.com 8 уровень.

// Sum Numbers
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
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

