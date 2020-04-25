// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = [];

// Write password to the #password input
function writePassword() {

  var length = prompt("How long do you want your password to be? Enter a number from 8-30");
  var passwordLength = parseInt(length);

  password = "";

  if (passwordLength >= 8 && passwordLength <= 30) {
    askLowerCase()
  } else {
    console.log("choose a number from 8-30");
    alert("choose a number from 8-30");
    return;
  }
  askUpperCase();

  askSpecial();

  askNumeric();

  for (var i=0; i < passwordLength; i++) {
    password += generatePassword[Math.floor(Math.random() * Math.floor(generatePassword.length))];
  }

  console.log(password);

  document.getElementById("password").value = password

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function askLowerCase() {
  var lowercase = confirm("Do you want to use lower case letters?");
  if (lowercase) {
    generatePassword.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  return generatePassword, console.log(generatePassword);
}

function askUpperCase() {
  var uppercase = confirm("Do you want to use upper case letters?");
  if (uppercase) {
    generatePassword.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ,"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  return generatePassword, console.log(generatePassword);
}

function askSpecial() {
  var special = confirm("Do you want to use special characters?");
  if (special) {
    generatePassword.push("!", "@", "#", "$", "%", "^", "&", "*");
  }
  return generatePassword, console.log(generatePassword);
}

function askNumeric() {
  var numeric = confirm("Do you want to use numbers?");
  if (numeric) {
    generatePassword.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  return generatePassword, console.log(generatePassword);
}
