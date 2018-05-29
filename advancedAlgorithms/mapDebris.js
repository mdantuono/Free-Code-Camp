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
