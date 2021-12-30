// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Characters
function generatePassword() {
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//Output/Input Arrays for Concat
var outputArray = [];
var inputArray = [];

//Prompts
var amntCharacters = prompt ("How many character's between 8-128 for your password?");
//Prevent invalid # of characters
console.log(amntCharacters < 8, amntCharacters < 128, (amntCharacters < 8 || amntCharacters > 128), typeof amntCharacters !== Number, typeof amntCharacters !== "number", typeof amntCharacters, parseInt(amntCharacters));

if (!parseInt(amntCharacters)){
  return "Please enter a valid character";
}

if (amntCharacters < 8 || amntCharacters > 128){
  return "Please enter a valid number between 8-128";
}

var numbers = confirm ("Would you like numbers in your password?");
var special = confirm ("Would you like special characters in your password?");
var uppercase = confirm ("Would you like uppercase characters in your password?");
var lowercase = confirm ("Would you like lowercase characters in your password?");

//Function to write password based off data taken
if (numbers){
  outputArray = outputArray.concat(numberArray);

}

if (special){
  outputArray = outputArray.concat(specialArray);

}

if (uppercase){
  outputArray = outputArray.concat(uppercaseArray);

}

if (lowercase){
  outputArray = outputArray.concat(lowercaseArray);
}

//For Loop for Password Length
for (var i = 0; i < amntCharacters; i++) {
      
  inputArray.push (outputArray[Math.floor(Math.random() * outputArray.length)]); 
  }

  return inputArray.join("") ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
