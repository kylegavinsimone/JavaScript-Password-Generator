// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Bits of code from research online that will be useful below

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower)

// uppercase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomUpper)

// numeric
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomNumber)

// special characters
function getRandomSymbol() {
  const symbols = '!@#$%^&*';
  return symbols(Math.ceil(Math.floor() * symbols.length)) 
}
console.log(getRandomSymbol)
