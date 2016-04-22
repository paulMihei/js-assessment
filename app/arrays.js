exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.findIndex((element, index, array) => element === item);
  },

  sum: function (arr) {
    return arr.reduce((a, b) => a + b);
  },

  remove: function (arr, item) {
    return arr.filter(e => e != item);
  },

  removeWithoutCopy: function (arr, item) {

    while (arr.indexOf(item) != -1)
      arr.splice(arr.indexOf(item), 1);

    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var count = 0;
    arr.forEach(e => e === item ? count++ : '');
    return count;
  },

  duplicates: function (arr) {
    var duplicatesArr = [];
    arr.forEach(e => {
      if (arraysAnswers.count(arr, e) > 1 && duplicatesArr.indexOf(e) == -1)
        duplicatesArr.push(e);
    });
    return duplicatesArr;
  },

  square: function (arr) {
    return arr.map(e => e*e);
  },

  findAllOccurrences: function (arr, target) {

  }
};
