const removeFromArray = function (array, removeWord) {
     
  return array.filter(element=>element !== removeWord);
    
    
 
};

let array = ["apple","apple","mapple","watermelon","orange","berry","strawberry"];
console.log(removeFromArray(array,"apple"))
// Do not edit below this line
module.exports = removeFromArray;
