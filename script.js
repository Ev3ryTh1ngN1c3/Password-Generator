// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePasswordoptions() {
  var length = parseInt(prompt("how many characters would you like your password to contain"), 10)
  //if length is less than 8 and more than 128 
  var hasspecialcharacters = confirm("click okay to confirm to include special characters")
  var hasnumeralcharacters = confirm("click okay to confirm to include numerical characters")
  var haslowercasecharacters = confirm("click okay to confirm to include lowercase characters")
  var hasuppercasecharacters = confirm("click okay to confirm upper case characters")

  if (
    hasspecialcharacters === false && hasnumeralcharacters === false && haslowercasecharacters === false && hasuppercasecharacters === false) {
    alert("must select at least one character type")
    return null;
  }
  var passwordoptions = {
    length: length,
    hasspecialcharacters: hasspecialcharacters,
    hasnumeralcharacters: hasnumeralcharacters,
    haslowercasecharacters: haslowercasecharacters,
    hasuppercasecharacters: hasuppercasecharacters

  }
  return passwordoptions;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password = document.getElementById("password");

function generatePassword() {
  var options = generatePasswordoptions();
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  const uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercasecharacters = "abcdefghijklmnopqrstuvwxyz"
  const numericalcharacters = "0123456789"
  const specialcharacters = "!@#$%^&*()"
  var passwordLength = 8;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}