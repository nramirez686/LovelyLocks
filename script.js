// Assignment code here
// Refer the #generate element and #password input
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Generate a random password
function generatePassword() {
  var passwordLength = getPasswordLength();
  if (!passwordLength) return;

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChars
  ) {
    alert("At least one character type must be selected.");
    return;
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  var availableChars = "";
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumeric) availableChars += numericChars;
  if (includeSpecialChars) availableChars += specialChars;

  //for loop
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}

// function for password length and input
function getPasswordLength() {
  var passwordLengthString = prompt(
    "Enter password length (between 8 and 128 characters)"
  );
  var passwordLength = parseInt(passwordLengthString);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a value between 8 and 128.");
    return null;
  }

  return passwordLength;
}
