import { add, reverseString, isPalindrome } from './index.js';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(add(-3, -4)).toBe(-7);
  });

  test('adds positive and negative numbers', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('throws TypeError if first argument is not a number', () => {
    expect(() => add('a', 2)).toThrow(TypeError);
    expect(() => add('a', 2)).toThrow('Both arguments must be numbers');
  });

  test('throws TypeError if second argument is not a number', () => {
    expect(() => add(1, null)).toThrow(TypeError);
  });

  test('adds zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('throws TypeError if argument is undefined', () => {
    expect(() => add(undefined, 1)).toThrow(TypeError);
  });

  test('returns NaN when adding NaN (NaN passes typeof check)', () => {
    expect(add(NaN, 1)).toBeNaN();
  });
});

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('returns empty string for empty input', () => {
    expect(reverseString('')).toBe('');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('throws TypeError if argument is not a string', () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(123)).toThrow('Argument must be a string');
  });

  test('reverses a numeric string', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('reverses a string with special characters', () => {
    expect(reverseString('a!b@c')).toBe('c@b!a');
  });
});

describe('isPalindrome', () => {
  test('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns true for palindrome ignoring case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('returns true for palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('throws TypeError if argument is not a string', () => {
    expect(() => isPalindrome(42)).toThrow(TypeError);
    expect(() => isPalindrome(42)).toThrow('Argument must be a string');
  });

  test('returns true for a numeric palindrome string', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  test('returns true for string of only non-alphanumeric characters', () => {
    expect(isPalindrome('...')).toBe(true);
  });

  test('returns false for two-character non-palindrome', () => {
    expect(isPalindrome('ab')).toBe(false);
  });
});
