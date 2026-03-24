// functions.js

// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10; // Calculates 10% tax
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase(); // Converts string to uppercase
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2; // Returns the larger number
}

// Function 4: isPalindrome
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed; // Checks if the word reads the same backwards
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount; // Returns price after discount
}

// Optional: Export functions if tests require it
module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};