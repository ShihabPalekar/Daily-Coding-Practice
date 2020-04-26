/*
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer 
that is the square of an integer; in other words, it is the product of some integer with itself.
*/


/* Tried this method first; 
it gives out the expected answer but in case of big numbers, the loop gets quite long. */

/*

var isSquare = function(n){
    let num;
    for (var i =0; i >= n; i++) {
      num = i*i;
    }
    if (num === n) {
      return true;
    } else {
      return false;
    }
  }

  */


  var isSquare = function(n){
    let sqRoot = Math.sqrt(n);
    if (sqRoot % 1 !== 0) {
      return false;
    } else {
      return true;
    }
  }
  