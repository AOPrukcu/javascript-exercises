const palindromes = function (word) {
    let arr = word.split("")
    let result = arr.filter((character) => alphanumerical.includes(character) )
    let temp = result.slice()
    let reverse = result.reverse()
    palindrome = reverse.join('').toLowerCase() === temp.join('').toLowerCase()
    return palindrome

     
    

};
str = "adfasfasafasf"
str1 ="abcba"
palindromes(str1)


// Do not edit below this line
module.exports = palindromes;
