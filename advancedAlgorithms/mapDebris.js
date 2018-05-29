// program that returns the orbital period of a given space object

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var endArray = [];
  for (var i = 0; i < arr.length; i++) {
    var op = Math.round(2 * Math.PI * Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3) / GM));
    endArray.push({"name": arr[i].name, "orbitalPeriod": op});
  }
  return endArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// alternatively (with second function)

var findOP = function(alt) {
  alt = Math.round(2 * Math.PI * Math.sqrt(Math.pow((alt + 6367.4447), 3) / 398600.4418));
  return alt;
};

function orbitalPeriod(arr) {
  var endArray = [];
  for (var i = 0; i < arr.length; i++) {
    var op = findOP(arr[i].avgAlt);
    endArray.push({"name": arr[i].name, "orbitalPeriod": op});
  }
  
  return endArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
