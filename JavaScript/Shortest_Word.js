// Prompt: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Answer:
const findShort = (s) => Math.min(...s.split(" ").map((w) => w.length));

// function findShort(s) {
//   Math.min.apply(
//     null,
//     s.split(" ").map((w) => w.length)
//   );
// }

// function findShort(s) {
//   return s
//     .split(" ")
//     .reduce((prev, curr) => (curr.length < prev.length ? curr : prev)).length;
// }
