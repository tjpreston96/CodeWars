// Prompt: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// Answer:
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

// function openOrSenior(data) {
//   const output = [];

//   data.forEach((entry) => {
//     if (entry[0] >= 55 && entry[1] > 7) output.push("Senior");
//     else output.push("Open");
//   });

//   return output;
// }
