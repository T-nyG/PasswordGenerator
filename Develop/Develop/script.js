// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = [];

// Write password to the #password input
function writePassword() {

  var length = prompt("How long do you want your password to be? Enter a number from 8-20");
  var passwordLength = parseInt(length);

  if (passwordLength >= 8 && passwordLength <= 20) {
    askLowerCase()
  } else {
    console.log("choose a number from 8-20");
    alert("choose a number from 8-20");
    return;
  }
  askUpperCase();

  askSpecial();

  askNumeric();

  // for (var i=0; i < length; i++) {
  //   password += generatePassword[Math.floor(Math.random() * generatePassword.length)];
  // }


  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

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











// function makePasswd() {
//   var passwd = '';
//   var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// for (i=1;i<8;i++) {
//   var c = Math.floor(Math.random()*chars.length + 1);
//   passwd += chars.charAt(c)
// }

// console.log(passwd);

// }


function password_generator( len ) {
  var length = (len)?(len):(10);
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while( password.length<length ) {
      entity1 = Math.ceil(string.length * Math.random()*Math.random());
      entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
      hold = string.charAt( entity1 );
      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += numeric.charAt( entity2 );
      character += punctuation.charAt( entity3 );
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0,len);
}

console.log( password_generator() );


