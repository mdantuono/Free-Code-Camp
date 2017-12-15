function pairElement(str) {
   var charArray = str.split("");
   console.log(charArray);

   var pairArray = [];
   console.log(pairArray);
   for (var i = 0; i < charArray.length; i++) {
       if (charArray[i] === "G") {
           pairArray.push(["G", "C"]);
           console.log(pairArray);
       }
       else if (charArray[i] == "C") {
           pairArray.push(["C", "G"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "A") {
           pairArray.push(["A", "T"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "T") {
           pairArray.push(["T", "A"]);
           console.log(pairArray);
       }
   }
   return pairArray;
}