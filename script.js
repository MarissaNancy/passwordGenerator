// Assignment Code
var lowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","-","$","%","&","'","(",")","*","+","-",",","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

var password;

//all these functions need to be in one//
function passwordOptions() {
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
//do i need to store these answers and also do i need to put these with option variable line 59
  var lowcaseOpt = confirm("Include lowcase letters?");
   if (lowcaseOpt === true) {
   userChoice = userChoice + lowcase;    
  } 

  var upcaseOpt = confirm("Include UPPERCASE letter?");
   if (upcaseOpt === true) {
   userChoice = userChoice + upcase;
  }

  var numbersOpt = confirm("Include numbers?");
   if (numbersOpt === true) {
     userChoice = userChoice + numbers;
  }

  var specOpt = confirm("Include special characters?");
   if (specOpt === true) {
       userChoice = userChoice + special;
   }
  if (lowcaseOpt === false && numbersOpt === false && upcaseOpt === false && specOpt === false) {
    alert("Must choose one character option")
    return;
  }
  var options = {
    passwordlength: passwordlength,
    lowcaseOpt: lowcaseOpt,
    upcaseOpt: upcaseOpt,
    numbersOpt:numbersOpt,
    specOpt:specOpt,
  }  
    return options;
};

//passwordoptions();
//pass the concat array//
function random(array) {
  //the variable random stores the answer to (mathrandom * arraylength) generates a ran number to enter array//
  
  var random = Math.floor(Math.random() * array.length);
   //lookin at index generated from varrandom goes into array 
  var index = array[random];
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