// Generates the largest palindrome for two 3 digit numbers.
// Instructions: Run the code.

function isPalindrome(x) {
    var n = 0;
    var m = x;
    while (x > 0) {
        n = n * 10 + x % 10;
        x = x / 10 | 0;
    }
    return n === m;
}

function Palindrome() {
  var r = 0;
  for (var p = 990; p > 99; p-= 11) {
    for (var q = 999; q > 99; q--) {
      var t = p * q;
      if (r < t && isPalindrome(t)) {
        r = t;
        break;
      } else if (t < r) {
        break;
      }
    }
  }
  return r;
}

console.log(Palindrome())