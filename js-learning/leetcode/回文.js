var isPalindrome = function(x) {
    if(x<0) return false
    x=x.toString()

    for(let i=Math.floor(x.length/2);i>=0;i--){
        if(x[i]!==x[x.length-i-1]) return false
    }
    return true
};

console.log(isPalindrome(100))