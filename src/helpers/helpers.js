function updateStrength(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols) {
  const strength = -10 + length + Number(hasUpperCase) + Number(hasLowerCase) + Number(hasNumbers) + Number(hasSymbols);

  if (strength === -10) return '';
  if (strength <= 1) return 'TOO WEAK!';
  if (strength === 2) return 'WEAK';
  if (strength === 3) return 'MEDIUM';
  if (strength >= 4) return 'STRONG';
  
  return strength;
}

module.exports = { updateStrength };