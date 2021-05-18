// Assignment Code
var lowcase = "abcdefghijklmnopqrstuvwxyz";
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!#-$%&'()*+,-./:;<=>?@[]^_`{|}~";

var lowcaseOpt = false;
var upcaseOpt = false;
var numbersOpt = false;
var specOpt = false;

var passwordlength;
var userChoice = "";
var password

//all these functions need to be in one//
function passwordOptions() {
  var userChoice = "";
  var lowcaseOpt = false;
  var upcaseOpt = false;
  var numbersOpt = false;
  var specOpt = false;

  var passwordlength = parseInt(prompt("Choose desired password length between 8 and 128"));

  if (isNaN(passwordlength) === true) {
    alert("password length must be a number")
    return;
  }
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Must choose length between 8 and 128")
    return;
  }
//do i need to store these answers and also do i need to put these with option variable line 59
  var lowcaseOpt = window.confirm("Include lowcase letters?");
  if (lowcaseOpt === true) {
    userChoice = userChoice + lowcase;    
  } 

  var upcaseOpt = window.confirm("Include UPPERCASE letter?");
  if (upcaseOpt === true) {
    userChoice = userChoice + upcase;
  }

  var numbersOpt = window.confirm("Include numbers?");
  if (numbersOpt === true) {
    userChoice = userChoice + numbers;
  }

  var specOpt = window.confirm("Include special characters?");
    if (specOpt === true) {
      userChoice = userChoice + special;
  }
  if (lowcaseOpt === false, numOpt === false, upcaseOpt === false, specOpt === false) {
    alert("Must choose one character option");
    generatePassword();
  }
};
var password = ""

// loop as many time as your pass length is based on index of your string and return character,false statemants not needed becasue we only care if its true//
//make sure its length and not password length//
for (var i = 0; i< length; i++) {
  var random = Math.floor(Math.random() * userChoice.length);

  password = password + userChoice.charAt(random);
}

  return password;

};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
