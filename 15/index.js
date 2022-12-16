/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    // Loop
    // for (let i = 0; i < str.length / 2; i++) {
    //     if (str[i] !== str[str.length - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;
    
    // JS split reverse functions
    const reverseStr = str.split('').reverse().join('');
    return str == reverseStr ? true : false;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
