/**
 * Calculates the strength of the password based on character length and settings.
 * @param {integer} length
 * @param {boolean} hasUpperCase 
 * @param {boolean} hasLowerCase 
 * @param {boolean} hasNumbers 
 * @param {boolean} hasSymbols 
 * @returns string
 */
function updateStrength(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  // Calculates a numerical value for the password strength starting at -10.
  const strength = -10 + length + Number(hasUpperCase) + Number(hasLowerCase) + Number(hasNumbers) + Number(hasSymbols);

  // Based on the numerical strength, returns a predetermined string
  if (strength === -10 || 
      (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSymbols) || length < 5) return 'N/A';
  if (strength <= 1) return 'TOO WEAK!';
  if (strength === 2) return 'WEAK';
  if (strength === 3) return 'MEDIUM';
  if (strength >= 4) return 'STRONG';
}

/**
 * Generates a randomized password based on character length and settings.
 * @param {integer} length
 * @param {boolean} hasUpperCase 
 * @param {boolean} hasLowerCase 
 * @param {boolean} hasNumbers 
 * @param {boolean} hasSymbols 
 * @returns string
 */
function generatePassword(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {

  // If the character length is smaller than 5 or if all the settings checkboxes are unchecked, return the placeholder password.
  if (length < 5 || (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSymbols)) return 'P4$5W0rD!';
  
  let result = '';
  let baseStr = ''; // Base string that will receive the characters that will form the password
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '@%+/!#$?:,(){}[]';

  // Verifies which settings are on and adds them to baseStr
  if (hasUpperCase) baseStr = baseStr.concat(upperCase);
  if (hasLowerCase) baseStr = baseStr.concat(lowerCase);
  if (hasNumbers) baseStr = baseStr.concat(numbers);
  if (hasSymbols) baseStr = baseStr.concat(symbols);

  // Creates the password with a for loop that randomnly adds a character from the base string to the result string
  for (let index = 0; index < length; index++) {
    result = result.concat(baseStr[Math.floor(Math.random() * baseStr.length)])
  }

  return result;
}

/**
 * Verifies if the password contains at least one character for each of the settings that are on
 * @param {string} password 
 * @param {boolean} hasUpperCase 
 * @param {boolean} hasLowerCase 
 * @param {boolean} hasNumbers 
 * @param {boolean} hasSymbols 
 * @returns string
 */
function isPasswordValid(password, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  const pwArr = password.split(""); // Turns password into array
  
  // Turns characters strings into arrays
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split("");
  const numbers = '0123456789'.split("");
  const symbols = '@%+/!#$?:,(){}[]'.split("");

  if (hasUpperCase && compareArr(pwArr, upperCase) === false) return false;
  if (hasLowerCase && compareArr(pwArr, lowerCase) === false) return false;
  if (hasNumbers && compareArr(pwArr, numbers) === false) return false;
  if (hasSymbols && compareArr(pwArr, symbols) === false) return false;

  return true;
}

/**
 * Loops through each array element and returns true if one of the characters from array 2 
 * is present in array 1
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns 
 */
function compareArr(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[x] === arr2[y]) return;
    }
  };
  return false;
}

module.exports = { updateStrength, generatePassword, isPasswordValid };