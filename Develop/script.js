// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = [];

// Write password to the #password input
function writePassword() {
  var lower = confirm("Do you want to use lower case letters?")
  var upper = confirm("Do you want to use upper case letters?")
  var special = confirm("Do you want to use special characters?")
  var numeric = confirm("Do you want to use numbers?")

  if (lower) {
    generatePassword.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }

  if (upper) {
    generatePassword.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ,"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }

  if (special) {
    generatePassword.push("!", "@", "#", "$", "%", "^", "&", "*", "-", "=")
  }

  if (numeric) {
    generatePassword.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
  }

  for (var i=0; i< 10; i++) {
    password += generatePassword[Math.floor(Math.random() * generatePassword.length)];
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var password = writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function makePasswd() {
  var passwd = '';
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (i=1;i<8;i++) {
  var c = Math.floor(Math.random()*chars.length + 1);
  passwd += chars.charAt(c)
}

console.log(passwd);

}


// function password_generator( len ) {
//   var length = (len)?(len):(10);
//   var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//   var numeric = '0123456789';
//   var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//   var password = "";
//   var character = "";
//   var crunch = true;
//   while( password.length<length ) {
//       entity1 = Math.ceil(string.length * Math.random()*Math.random());
//       entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
//       entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
//       hold = string.charAt( entity1 );
//       hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
//       character += hold;
//       character += numeric.charAt( entity2 );
//       character += punctuation.charAt( entity3 );
//       password = character;
//   }
//   password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//   return password.substr(0,len);
// }

// console.log( password_generator() );


