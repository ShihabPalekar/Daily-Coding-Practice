/*
Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(numbers) {  
    let arrayOfNum = numbers.sort((a, b) => a - b);
    let sumOfNum = arrayOfNum[0] + arrayOfNum[1];
    return sumOfNum;
  }
  