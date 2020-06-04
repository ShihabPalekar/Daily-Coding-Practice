/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/


// Method 1

function findUniq(arr) {
    let newArr = [];
    let ans = 0;
    arr.forEach(i => {
      newArr = arr.filter(e => e === i)
        if (newArr.length === 1) {
          console.log(newArr)
          ans = newArr[0]
        }
      }
    )
    return ans
  }


  // Method 2
  
  function findUniq(arr){
    const newArr = [...new Set(arr)]
    const array1 = arr.filter(e => e === newArr[0])
    const array2 = arr.filter(e => e === newArr[1])
    
    if (array1.length === 1) {
      return array1[0];
    } else if (array2.length === 1) {
      return array2[0]
    }
  }
  