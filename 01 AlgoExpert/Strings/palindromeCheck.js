function isPalindrome(string) {
    // Write your code here.
  var	string1 = string.split('');
      var revString = string1.reverse().join('');
      return string==revString;

  }
  