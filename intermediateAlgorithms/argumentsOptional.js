
function addTogether() {
  switch(arguments.length) {
    case 2 : 
      if (Number.isInteger(arguments[0] && arguments[1])) {
        return arguments[0] + arguments[1];
      } else {
        return undefined;
      }
      break;
    case 1 : 
      var firstNum = arguments[0];
      if (Number.isInteger(firstNum)) {
        return function(secondNum) {
          if (Number.isInteger(secondNum)) {
            return (firstNum + secondNum);
          } else {
            return undefined;
          }
        };
      }
      else {
        return undefined;
      }
      break;
   }
}

addTogether(2)(3);
