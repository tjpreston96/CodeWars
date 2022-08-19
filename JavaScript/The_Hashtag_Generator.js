// Prompt:
function generateHashtag(str) {
    let trimmed = str.trim();
    return trimmed.length >= 140 || !trimmed
    ? false
    : "#" + trimmed.split(" ").map(capitalize).join("");
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Answer:
// function generateHashtag(str) {
//   return str.length > 140 || str === ""
//     ? false
//     : "#" + str.split(" ").map(capitalize).join("");
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
  