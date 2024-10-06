const reverseString = function(input) {
    let reverseInput = "";
    for (let index = input.length -1 ; index >= 0; index--) {
        reverseInput += input.charAt(index)
         
        
    }
    return reverseInput;
};
 // Do not edit below this line
module.exports = reverseString;
