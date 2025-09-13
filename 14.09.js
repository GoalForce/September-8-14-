/*
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

/*
function incrementString(strng) {
  let NumInStrng = strng.split("").filter((cur) => !isNaN(cur));
  NumInStrng;
  let StrInStrng = strng.split(NumInStrng.join("")).filter((cur) => cur !== "");
  StrInStrng;
  let addNumtoNumInStrng = (BigInt(NumInStrng.join("")) + 1n)
    .toString()
    .padStart(NumInStrng.length, "0")
    .split("");
  addNumtoNumInStrng;
  return [...StrInStrng, ...addNumtoNumInStrng].join("");
}
console.log(incrementString("fo99obar99"));
*/
const incrementString = (s) => s.replace(/[0-8]?9*$/, (m) => ++m);
