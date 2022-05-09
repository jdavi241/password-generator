// Assignment code here
var characterLength = 8;
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts (); // True of false statement 
  var passwordText = document.querySelector("#password");
  // below returns password only if correct conditions are selected 
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = " ";
  }

}

function generatePassword () {
  var password = "";

  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Condition prompts 
function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("Enter desired password length 8-128 characters."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be 8-128 characters.");
    return false;
  }

  if (confirm("Would you like lower case letters? Click 'Okay' for yes and 'Cancel' for no.")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Would you like upper case letters? Click 'Okay' for yes and 'Cancel' for no.")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Would you like to include numbers? Click 'Okay' for yes and 'Cancel' for no.")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  if (confirm("Would you like to include special characters? Click 'Okay' for yes and 'Cancel' for no.")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  return true;
}