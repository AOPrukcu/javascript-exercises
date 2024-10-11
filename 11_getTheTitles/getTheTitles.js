const getTheTitles = function(arr) {

    let titles = arr.map((element) => element.title)
    return titles

};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  


// Do not edit below this line
module.exports = getTheTitles;
