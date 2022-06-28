// Reverse the given array without using array.reverse()
// arr = ["A", "B", "C", "D", "E"]

let arr = ["A", "B", "C", "D", "E"];
let ans = [];

const func1 = () => {
  for (let i = arr.length - 1; i >= 0; i--) {
    ans.push(arr[i]);

  }
  console.log(ans);
};

func1()
