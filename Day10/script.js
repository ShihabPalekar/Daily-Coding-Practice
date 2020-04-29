/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

function accum(s) {
  let array = s.split("");
  let string = "";
  
  function repeat (char, num) {
//     console.log(char, num);
    let result = "";
    let i = 0;
    while (i < num) {
        i++;
        result += char;
    }
    let lowerCase = result.toLowerCase();
    let upperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return upperCase;
};

  for ( let i = 0; i < array.length; i++) {
    string += i===0 ? repeat(array[i], i+1) : `-${repeat(array[i], i+1)}`;
  }
  return string;
}
