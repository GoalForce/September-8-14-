/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ndx = x
    .split(" ")
    .map((cur) => cur.split(""))
    .map((cur) => [...cur].map((cur) => alphabet.indexOf(cur) + 1))
    .map((cur) => [...cur].reduce((acc, cur) => acc + cur, 0));
  ndx;
  let result = ndx.indexOf(Math.max(...ndx));
  return x.split(" ")[result];
}
console.log(high("what time are we climbing up the volcano"));

// Another solution
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
