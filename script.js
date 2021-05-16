// Assignment Code
//var lowcase = ("abcdefghijklmnopqrstuvwxyz");
//var upcase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//var number = ("1234567890");
//var special = ("!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
//var length = ("");

//do i need to declare here??var passwordLength =
// varlowcaseOpt ? =
//var upcaseOpt = 
//var numOpt = 
//var specOpt =

//this function is temp//
var passwordLength = function() {
  var userChoice = window.prompt("Choose desired password length between 8 and 128");

  if(!userChoice) {
    return;
}

//write something so that if user chooses something other than a number also rejects

//include something here to state the parameters 
window.alert("Password length can be between 8 and 128 characters long");
//check if i need to add to this variable as in if they cancel Also make sure if its not a number reject, if number less than 8 reject if number more than 128 reject//

var lowcaseOpt = window.confirm("Include lowcase letters?");
//have to be able to store response

var upcaseOpt = window.confirm("Include UPPERCASE letter?");
//have to store response here

var numOpt = window.confirm("Include numbers?");
//have to store response

var specOpt = window.confirm("Include special characters?");
//have to store response

//if they do not at least say "OK" to one of the prompts needs to be a window reminding them that they must choose one//
window.alert("Must choose at least one special charachter option");
//return so that user can start process over again//




var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
