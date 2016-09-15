function repeatStringNumTimes(str, num) {
  // Empty string variable to store the repeated word
  var strHold = "";

  // Repeat code as many times as needed according to num
  for (var i = 0; i < num; i++){
    strHold += str;
  }

  return strHold;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
