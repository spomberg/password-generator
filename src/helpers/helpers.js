function updateStrength(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  return -10 + length + Number(hasUpperCase) + Number(hasLowerCase) + Number(hasNumbers) + Number(hasSymbols);
}

module.exports = { updateStrength };