/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char. */

function XO(str) {
    let numOfX = 0;
    let numOfO = 0;
    
    str.toLowerCase().split("").forEach(function getvalue(val) {
      if (val === "x") {
        numOfX += 1;
      } else if (val === "o") {
        numOfO += 1;
      }
    })
    return numOfX === numOfO;
  }