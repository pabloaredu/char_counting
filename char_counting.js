
function countLetters(sentence) {
  var letterCounts = {};


  for (var i = 0; i < sentence.length; i++){
    var char = sentence[i]
    if (char !== " ") {
      if (letterCounts[char] === undefined) {
        letterCounts[char] = 0;
      }
      letterCounts[char] += 1;
    }
  }
  return letterCounts;
}

console.log(countLetters('hou  seh'));
console.log(countLetters('househ'));



