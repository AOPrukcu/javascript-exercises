const getTheTitles = function (arr) {
  return arr.map((element) => element.title);
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// Do not edit below this line
module.exports = getTheTitles;
