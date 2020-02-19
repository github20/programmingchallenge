// Basic random number generator and bubble sort.
// Instructions: Run the code.
var arr = [];
while (arr.length < 101) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);