// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("inside generate password");

  let passwordLength = parseInt(prompt("please give password length between 8 and 128"));
  if (Number.isNaN(passwordLength)) {
    alert("password length must a number");
    return ("please retry with proper length");
  }

  if (passwordLength < 8) {
    alert("password length must be atleast 8 characters");
    return ("please retry with length between 8 and 128");
  }

  if (passwordLength > 128) {
    alert("password length must be 128 or less characters");
    return ("please retry with length between 8 and 128");
  }

  let includedCharacters = "";
  let lower = confirm("press OK to include lower case characters in your password. Cancel otherwise");
  let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";

  if (lower){
    includedCharacters += lowerCharacters;
  }
  console.log("included characters = ", includedCharacters);

  let upper = confirm("press OK to include upper case characters in your password. Cancel otherwise");
  let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (upper){
    includedCharacters += upperCharacters;
  }
  console.log("included characters = ", includedCharacters);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
