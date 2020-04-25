/* 
Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter.

If the parameter is itself not a perfect square, 
than -1 should be returned.

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

function findNextSquare(sq) {
    let sqRoot = Math.sqrt(sq);
    if(sqRoot % 1 !== 0) {
      return (-1)    
    }
    return (sqRoot+1) * (sqRoot+1);
  }

  