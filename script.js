// Assignment Code
var lowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","-","$","%","&","'","(",")","*","+","-",",","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

var password;

//all these functions need to be in one//
function passwordoptions() {
  var userChoice = "";

  var passwordlength = parseInt(prompt("Choose desired password length between 8 and 128"));

  if (isNaN(passwordlength) === true) {
    alert("password length must be a number")
    return;
  }
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Must choose length between 8 and 128")
    return;
  }

  var lowcaseopt = confirm("Include lowcase letters?");
   if (lowcaseopt === true) {
   userChoice = userChoice + lowcase;    
  } 

  var upcaseopt = confirm("Include UPPERCASE letter?");
   if (upcaseopt === true) {
   userChoice = userChoice + upcase;
  }

  var numbersopt = confirm("Include numbers?");
   if (numbersopt === true) {
     userChoice = userChoice + numbers;
  }

  var specopt = confirm("Include special characters?");
   if (specopt === true) {
       userChoice = userChoice + special;
   }
  if (lowcaseopt === false && numbersopt === false && upcaseopt === false && specopt === false) {
    alert("Must choose one character option")
    return;
  }
  var options = {
    passwordlength: passwordlength,
    lowcaseopt: lowcaseopt,
    upcaseopt: upcaseopt,
    numbersopt:numbersopt,
    specopt:specopt,
  }  
    return options;
};

passwordoptions();

//pass the concat array//
function generatePassword() {
  var getoptions = passwordoptions();
  var garanteedChar= [];
  var results = [];

  if (getoptions.lowcaseopt === true) {
    garanteedChar = garanteedChar.concat(lowcase)
  }
  if (getoptions.upcaseOpt === true) {
    garanteedChar = garanteedChar.concat(upcase)
  } 
  if (getoptions.numbersOpt === true) {
    garanteedChar = garanteedChar.concat(numbersOpt)
  }
  if (getoptions.specOpt === true) {
    garanteedChar === garanteedChar.concat(specOpt)    
  }
  return garanteedChar;
}
generatePassword();

function random() {
  
  var random = Math.floor(Math.random() * generatePassword.length);
  var index = generatePassword[random];
  return index;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);