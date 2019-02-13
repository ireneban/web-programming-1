const arrayUtils = require("./arrayUtils.js");

/* Given a string, capitalize the first letter and lowercase the remaining characters */
function capitalize(string) {
  // Check if the string exist
  if (typeof string === "undefined") {
    throw "provided variable is undefined";
  }
  // Check if the string is of the proper type
  if (string.constructor !== String) {
    throw "provided variable is not a string";
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/* Repeat the string `num` amount of times */
function repeat(string, num) {
  // Check if the string exist
  if (typeof string === "undefined") {
    throw "provided variable is undefined";
  }
  // Check if the string is of the proper type
  if (string.constructor !== String) {
    throw `${string || "provided variable"} is not a string`;
  }
  // Check if the number exists and is a positive number
  if (typeof num === "undefined" || typeof num !== "number" || num < 0) {
    throw "num should be a number which is greater than -1";
  }
  // Check if the number is an integer
  if (num % 1 !== 0) {
    throw "num should be an integer";
  }
  if (num === 0) return ""; // base case
  return string + repeat(string, num - 1);
}

/* Return an object that has the mapping of a character and the amount of times it appears in a string */
function countChars(string) {
   // Check if the string exist
  if (typeof string === "undefined") {
    throw "provided variable is undefined";
  } 
  // Check if the string is of the proper type
  if (string.constructor !== String) {
    throw `${string || "provided variable"} is not a string`;
  }
  // Convert string to array and use countElements()
  const arr = string.split('');
  return arrayUtils.countElements(arr);
}

module.exports = {
  capitalize,
  repeat,
  countChars,
}
