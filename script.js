// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("inside generate password");

  let passwordLength = parseInt(prompt("please give password length between 8 and 128"));
  if (Number.isNaN(passwordLength)){
    alert("password length must a number");
    return("please retry with proper length");
  }

  if (passwordLength < 8){
    alert("password length must be atleast 8 characters");
    return("please retry with length between 8 and 128");
  }

  if (passwordLength > 128){
    alert("password length must be 128 or less characters");
    return("please retry with length between 8 and 128");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
