/**
 * 
 * @param {integer} length 
 * @param {boolean} hasUpperCase 
 * @param {boolean} hasLowerCase 
 * @param {boolean} hasNumbers 
 * @param {boolean} hasSymbols 
 * @returns string
 */

function updateStrength(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  const strength = -10 + length + Number(hasUpperCase) + Number(hasLowerCase) + Number(hasNumbers) + Number(hasSymbols);

  if (strength === -10 || 
      (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSymbols) || length < 5) return 'N/A';
  if (strength <= 1) return 'TOO WEAK!';
  if (strength === 2) return 'WEAK';
  if (strength === 3) return 'MEDIUM';
  if (strength >= 4) return 'STRONG';
}

/**
 * 
 * @param {integer} length 
 * @param {boolean} hasUpperCase 
 * @param {boolean} hasLowerCase 
 * @param {boolean} hasNumbers 
 * @param {boolean} hasSymbols 
 * @returns string
 */
function generatePassword(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  if (length < 5 || (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSymbols)) return 'P4$5W0rD!';
  
  let result = '';
  let baseStr = '';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '@%+/!#$?:,(){}[]';

  if (hasUpperCase) baseStr = baseStr.concat(upperCase);
  if (hasLowerCase) baseStr = baseStr.concat(lowerCase);
  if (hasNumbers) baseStr = baseStr.concat(numbers);
  if (hasSymbols) baseStr = baseStr.concat(symbols);

  for (let index = 0; index < length; index++) {
    result = result.concat(baseStr[Math.floor(Math.random() * baseStr.length)])
  }

  return result;
}

module.exports = { updateStrength, generatePassword };