// Prompt: https://www.codewars.com/kata/525f50e3b73515a6db000b83

// Answer: 
function createPhoneNumber(numbers){
    return numbers.join("").replace(/(...)(...)(.*)/,'($1) $2-$3')
  }