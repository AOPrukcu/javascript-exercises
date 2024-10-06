const repeatString = function (word, repeatNumber) {
  if (repeatNumber < 0) {
    return "ERROR";
  }
  let repeatedWord = "";
  for (i = 0; i < repeatNumber; i++) {
    repeatedWord += word;
    console.log(repeatedWord);
  }
  return repeatedWord;
};

repeatString("hey", 4);

// Do not edit below this line
module.exports = repeatString;
