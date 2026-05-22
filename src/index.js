/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b
 * @throws {TypeError} If either argument is not a number
 */
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Reverses a string.
 * @param {string} str
 * @returns {string} The reversed string
 * @throws {TypeError} If the argument is not a string
 */
export function reverseString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome, ignoring non-alphanumeric characters and casing.
 * @param {string} str
 * @returns {boolean} True if the string is a palindrome, false otherwise
 * @throws {TypeError} If the argument is not a string
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
