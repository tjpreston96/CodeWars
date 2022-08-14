// Prompt: https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

// Answer:
function solution(number) {
  let result = 0;
  for (let n = 1; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0) result += n;
  }

  return result;
}

// function solution(number){
//   let result = []

//   for (let n = 1; n < number; n++) {
//     if(n%3===0 || n%5===0) result.push(n)
//   }

//   return result.reduce((prev, curr) => prev + curr, 0)
// }
