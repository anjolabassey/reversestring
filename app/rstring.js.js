
exports.reverseString = function (str) {
  var newString = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  
  
 if (str.length === 0 ) {
    return 'null';
    
  }
  else if (newString === str) {
    return true;
  }
  else {
    return newString;
  }
  
  
}
