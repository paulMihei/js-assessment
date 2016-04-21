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

  },

  truncate: function (arr) {

  },

  prepend: function (arr, item) {

  },

  curtail: function (arr) {

  },

  concat: function (arr1, arr2) {

  },

  insert: function (arr, item, index) {

  },

  count: function (arr, item) {

  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};
