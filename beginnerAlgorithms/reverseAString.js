function reverseString(str) {
  var strArray = str.split('');
//   console.log("after split");
//   console.log(strArray);
  strArray.reverse();
//   console.log("after reverse");
//   console.log(strArray);
  var reversedString = strArray.join('');
//   console.log("after join");
//   console.log(reversedString);
  
  return reversedString;
}

console.log(reverseString("Hello"));