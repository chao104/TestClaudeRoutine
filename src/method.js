export function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (min > max) {
    throw new RangeError('min must not be greater than max');
  }
  return Math.min(Math.max(value, min), max);
}

export function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError('Size must be a positive number');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
