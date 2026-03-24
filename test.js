// test.js

const {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
} = require('./functions'); // Make sure functions.js is in the same folder

console.log("calculateTax(100) →", calculateTax(100)); // 10
console.log("convertToUpperCase('hello') →", convertToUpperCase('hello')); // HELLO
console.log("findMaximum(5, 9) →", findMaximum(5, 9)); // 9
console.log("isPalindrome('racecar') →", isPalindrome('racecar')); // true
console.log("isPalindrome('hello') →", isPalindrome('hello')); // false
console.log("calculateDiscountedPrice(200, 25) →", calculateDiscountedPrice(200, 25)); // 150