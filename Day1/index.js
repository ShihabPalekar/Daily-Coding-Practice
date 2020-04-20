/* Create a function (or write a script in Shell) that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers. */

// Solution

function even_or_odd(number) {
    let answer;
    if (number % 2 == 1 || (-1)) {
       answer = "Odd";
    } if (number % 2 == 0) {
       answer = "Even";
    }
    return answer;
  }