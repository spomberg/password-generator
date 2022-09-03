const { isPasswordValid } = require('./helpers'); 

describe('isPasswordValid helper function', () => { 
  test('should return true when the str contains at least a char for each setting', () => { 
    const pw = '6+,rN$o!#fh}EO';
    const hasUpperCase = true;
    const hasLowerCase = true;
    const hasNumbers = true;
    const hasSymbols = true;
    const input = isPasswordValid(pw, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols);

    expect(input).toBe(true);
   })

  test('should return false when the str does not contain at least a char for each setting', () => { 
    const pw = '6rNofhEO';
    const hasUpperCase = true;
    const hasLowerCase = true;
    const hasNumbers = true;
    const hasSymbols = true;
    const input = isPasswordValid(pw, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols);

    expect(input).toBe(false);
   })
 });
