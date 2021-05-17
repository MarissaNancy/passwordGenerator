// Assignment Code
var lowcase = "abcdefghijklmnopqrstuvwxyz";
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "!#-$%&'()*+,-./:;<=>?@[]^_`{|}~";

//all these functions need to be in one//
function passwordOptions() {
  var passwordlength = parseInt(prompt("Choose desired password length between 8 and 128"));  // 10

  if (isNaN(passwordlength) === true) {
    alert("password length must be a number")
    return;
  }

  if (passwordlength < 8 || passwordlength > 128) {
    alert("Must choose length between 8 and 128")
    return;
  }


  var lowcaseOpt = window.confirm("Include lowcase letters?");
  //have to be able to store response

  var upcaseOpt = window.confirm("Include UPPERCASE letter?");
  //have to store response here

  var numOpt = window.confirm("Include numbers?");
  //have to store response

  var specOpt = window.confirm("Include special characters?");
  //have to store response

  //if they do not at least say "OK" to one of the prompts needs to be a window reminding them that they must choose one//
  //need this to be === false so that if all of them are false it will show this alert//
  window.alert("Must choose at least one special charachter option");
  //return so that user can start process over again//


  var options = {
    passwordlength: passwordlength,
    lowcaseOpt: lowcaseOpt,
    upcaseOpt: upcaseOpt,
    numOpt:numOpt,
    specOpt:specOpt
  }

  return options;
}


function generatePassword() {
  var getOptions = passwordOptions()
  var garanteedChar;
  var results = [];

  if (getOptions.lowcaseOpt === true) {
    garanteedChar = garanteedChar.concat(lowcase)
  }
  if (getOptions.upcaseOpt === true) {
    garanteedChar = garanteedChar.concat(upcase)
    
  }
  // loop as many time as your pass length is based on index of your string and return character
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
