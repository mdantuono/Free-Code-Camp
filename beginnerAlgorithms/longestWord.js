// Finds the longest word within a given string

function findLongestWord(str) {
  var words = str.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
