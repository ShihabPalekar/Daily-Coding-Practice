//Complete the solution so that it reverses the string value passed into it.

function solution(str){
    let splitStr = str.split("");
    let reverseStr = "";
    
    for (var i = splitStr.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }