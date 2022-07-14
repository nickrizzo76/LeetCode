/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // odd string lengths implicitly mean that the brackets can't be closed and thus malformed
    if(s.length % 2 !== 0) return false;
    
    const bracketDict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const openBrackets = new Set(['(', '[', '{'])
    const stack = []
    
    for(let i = 0; i < s.length; i++) {
        if( openBrackets.has(s[i]) ) {
            stack.push(s[i])
        } else {
            if (bracketDict[stack.pop()] !== s[i]) return false;
        }
    }
    
    if(stack.length > 0) return false;
    
    return true;
};
