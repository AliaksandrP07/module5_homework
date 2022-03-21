const arr = [0, 2, 1, 2, 5, 4, 3, 7, 0, 0, NaN, null];
let odd = 0;
let even = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
}
console.log("Odd elements ", odd);
console.log("Even elements ", even);
console.log("Zeros ", zero);