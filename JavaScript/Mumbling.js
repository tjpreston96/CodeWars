// Prompt: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Answer:
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

// function accum(s) {
//   return s
//     .split("")
//     .reduce(
//       (result, c, i) =>
//         result +
//         ((i || "") && "-") +
//         c.toUpperCase() +
//         c.toLowerCase().repeat(i),
//       ""
//     );
// }
