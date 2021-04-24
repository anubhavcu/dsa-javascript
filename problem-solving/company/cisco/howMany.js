// * similar problem description
// https://stackoverflow.com/questions/64649628/i-want-to-count-each-word-in-a-string-but-skip-words-that-have-special-chars-or

function howMany(sentence) {
  return sentence.split(/\s+/).filter(function (x) {
    return /^[A-Za-z]+(?:-[A-Za-z]+)*[.,;:?!]?$/.test(x);
  }).length;
}

// TODO: Working of regular expressions

// Explanation for the above solution -
// https://stackoverflow.com/a/64651564
