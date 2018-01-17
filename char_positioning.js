
function countLetters(sentence) {
  var letterCounts = {};


  for (var i = 0; i < sentence.length; i++){
    var char = sentence[i]
    if (char !== " ") {
      if (letterCounts[char] === undefined) {
        letterCounts[char] = [];
      }
      letterCounts[char].push(i);
    }
  }
  return letterCounts;
}

console.log(countLetters('Lighthouse in the house'));



