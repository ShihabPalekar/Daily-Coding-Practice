/* Given an array of integers of any length, return an array that has 1 added to 
the value represented by the array.

The array can't be empty.
Only non-negative, single digit integers are allowed.
Return nil (or your language's equivalent) for invalid inputs.

Examples
[2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

[1, -5, 7] would return null
*/

function upArray(arr){
    const searchNegative = arr.find(element => element < 0 || element > 9)
    
    const arrToString = arr.join("")
    const addOne = BigInt(arrToString) + 1n;
    const reqArray = Array.from(String(addOne), Number)
  
    console.log(arrToString)
      console.log(addOne)
  
    console.log(arr)
    if (searchNegative !== undefined || arr.length === 0) {
      return null;
    } else {
      return reqArray
    }
  }
    