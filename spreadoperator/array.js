// let arr = [1, 2, 3, 4, 5];
// let narr = [];
// narr = arr.map((value, idx) => {
//   console.log(value, idx);
//   return value*2
// });

// console.log(arr);
// console.log(narr);

// filter in js
// let arr = ["apple", "banana", "orange", "watemelon"];
// let narr = [];
// for (let i = 0; i < arr.length; i++) {
//   let fruit = arr[i];
//   if (fruit.length > 6) {
//     narr.push(fruit);
//   }
// }

// let arr = ["apple", "banana", "orange", "watemelon"];
// let narr = [];
// narr = arr.filter(function (fruit) {
//   return fruit.length > 6;
// });
// console.log(arr);
// console.log(narr);

// this keyword

function fn() {
  console.log(this);
  function abc() {
    console.log(this);
  }
  let ret = abc.bind(this);
  ret();
}
let obj = {
  name: "Mohit",
  func: fn,
};
boj.func();
