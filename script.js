// Assignment Code
//var lowcase = ("abcdefghijklmnopqrstuvwxyz");
//var upcase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//var number = ("1234567890");
//var special = ("!@#$%^&*()");
//var length = ("");

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
