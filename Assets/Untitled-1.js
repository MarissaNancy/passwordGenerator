var lowcase = "abcdefghijklmnopqrstuvwxyz";
var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "!#-$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var options = {
    passwordlength: passwordlength,
    lowcaseOpt: lowcaseOpt,
    upcaseOpt: upcaseOpt,
    numbersOpt:numbersOpt,
    specOpt:specOpt,
  }  
    return options;
  ; orig line 61


  function generatePassword() {
    var getoptions = passwordoptions()
    var garanteedChar= [];
    var results = [];
  
    if (getoptions.lowcaseOpt === true) {
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
    //line started at 63
//truthie falsie to make sure get options exsist
//f they dont exsist return

//for loop that would find concat array calling the randomized function by the length that the user specified 
//  

//this i took from line 62
//picking a 
//63 value in array//
//**make sure its length and not password length//
// for (var i = 0; i< userChoice.length; i++) {
//   var random = Math.floor(Math.random() * userChoice.length);

//   password = password + userChoice.charAt(random);

//   return password;

// };