const vowels = ['a','i','u','e','o']

function countVowelConsonant(str) {
    // write code here
    let newStr = [];
    str.split('').map(letter => {
        newStr.push(vowels.includes(letter) ? 1 : 2);
    });
    
    const sum = newStr.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    
    return sum;
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});