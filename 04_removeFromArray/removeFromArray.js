const removeFromArray = function (array, ...arg) {
  return array.filter(
    (arrayElements) => !checkArrayElement(arrayElements, ...arg)
  );
};

function checkArrayElement(arrayElements, ...arg) {
  return arg.some((element) => arrayElements === element);
}

let array = [
  "apple",
  "apple",
  "mapple",
  "watermelon",
  "orange",
  "berry",
  "strawberry",
];
console.log(removeFromArray(array, "apple"));
// Do not edit below this line
module.exports = removeFromArray;
