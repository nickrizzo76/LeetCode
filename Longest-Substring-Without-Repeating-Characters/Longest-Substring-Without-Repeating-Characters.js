/**
 * @param {string} s
 * @return {number}
 */

// Refined Solution
var lengthOfLongestSubstring = function(s) {
    let seenLetters = {}
    
    let maxLength = 0;
    let curLength = 0;
    
    let i = 0;
    while(i < s.length) {
        const currentLetter = s[i];
        if(currentLetter in seenLetters) {
            i = seenLetters[currentLetter];
            seenLetters = {}
            curLength = 0;
        } else {
            seenLetters[currentLetter] = i;
            curLength++;
            maxLength = Math.max(curLength, maxLength)
        }
        i++;
    }
    return maxLength;
};
