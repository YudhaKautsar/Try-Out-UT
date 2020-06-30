
function palindrome(str) {
    var x = str.length-1;
    
    if (x === 1 || str.length === 0) {
    return true;
    } if (str[0] === str[x]) {
    return palindrome(str.slice(1, x));
    } return false;
    }
console.log(palindrome("malam")) // output true
console.log(palindrome("katak")) // output true
console.log(palindrome("bunga")) // output false
console.log(palindrome("burung")) // output false
console.log(palindrome("sayap")) // output false