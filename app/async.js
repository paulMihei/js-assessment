exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async: function (value) {

  },

  manipulateRemoteData: function (url) {
    return new Promise(function (resolve, reject) {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', url, true);
      xobj.onreadystatechange = function () {

        if (xobj.readyState == 4 && xobj.status == "200") {
          var obj = JSON.parse(xobj.responseText);
          var peopleArr = [];

          for (let i = obj.people.length - 1; i >= 0; i--) {
            if (obj.people[i].name != 'Matt')
              peopleArr.push(obj.people[i].name);
          }
          peopleArr.splice(2, 0, obj.people[0].name);
          resolve(peopleArr);
        }

      };
      xobj.send(null);
    });
  }
};
