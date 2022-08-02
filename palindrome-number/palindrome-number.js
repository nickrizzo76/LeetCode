/**
 * @param {number} x
 * @return {boolean}
 */

// Solution: Converting to String
var isPalindrome = function(x) {
    const numArray = x.toString().split('');
    
    let pointerA = 0;
    let pointerB = numArray.length - 1;
    
    while(pointerA < pointerB) {
        if(numArray[pointerA] !== numArray[pointerB]) return false;
        pointerA++;
        pointerB--;
    }
    
    return true;
};

// Solution: (do without string conversion)
