//Function 1: calculateTax
//Create a function named calculateTax that takes a single parameter, amount, representing a monetary value.The function should calculate a 10% tax on the amount and return the tax value.
function calculateTax(amount) {
  return amount * 0.10; // ✔️ 10% of the amount
}
console.log(calculateTax(100));
//Function 2: convertToUpperCase
//Create a function named convertToUpperCase that takes a single parameter, text, which is a string.The function should convert the string to uppercase and return the result.
function convertToUpperCase(text) {
  return text.toUpperCase();
}

console.log(convertToUpperCase("hello world"));

//Function 3: findMaximum
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1; // or num2, since they are equal
  }
}

console.log(findMaximum(10, 5));
//Function 4: 
function isPalindrome(word) {
  // Normalize the string: lowercase and remove spaces if needed
  let normalized = word.toLowerCase();

  // Reverse the string
  let reversed = normalized.split("").reverse().join("");

  // Compare original with reversed
  return normalized === reversed;
}
console.log(isPalindrome("word"));

//Function 5:
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (originalPrice * discountPercentage) / 100;
  let finalPrice = originalPrice - discount;
  return finalPrice;
}



console.log(calculateDiscountedPrice(100, 20));
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };