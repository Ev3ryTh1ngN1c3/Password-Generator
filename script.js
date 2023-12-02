// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePasswordoptions() {
let length;
length = Number(prompt("how many characters would you like your password to contain"))
while(length < 8 || length > 128) {
    alert("length has to be greater than 8 & less than 128");
    length = Number(prompt("how many characters would you like your password to contain"))
  }
  //if length is less than 8 and more than 128 
  var hasspecialcharacters = confirm("click okay to confirm to include special characters")
  var hasnumeralcharacters = confirm("click okay to confirm to include numerical characters")
  var haslowercasecharacters = confirm("click okay to confirm to include lowercase characters")
  var hasuppercasecharacters = confirm("click okay to confirm upper case characters")

  if (
    hasspecialcharacters === false &&
    hasnumeralcharacters === false &&
    haslowercasecharacters === false
    && hasuppercasecharacters === false) {
    alert("must select at least one character type")
    return null;
  }
  var passwordoptions = {
    length: length,
    special: hasspecialcharacters,
    numeral: hasnumeralcharacters,
    lowercase: haslowercasecharacters,
    uppercase: hasuppercasecharacters

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

 let password="";
 let lower="abcdefghijklmnopqrstuvwxyz";
 let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let numbers="01234567890123456789012345678901234567890123456789"
 let special="!@#$%^&*()!@#$%^&*()!@#$%^&*()!@#$%^&*()!@#$%^&*()";
 if(options.lower){
     password += lower+lower+lower+lower+lower
}
if(options.upper){
    password +=upper+upper+upper+upper
}

if(options.numeral){
    password +=numbers+numbers+numbers+numbers+numbers
}
if(options.special){
    password +=special+special+special+special
}
  //Add more randomness
  password=password.split("");
  for(let i=0;i<5000;i++){
    let index1= Math.floor(Math.random()*password.length);
    let index2=Math.floor(Math.random()*password.length);
    let temp=password[index1];
    password[index1]=password[index2];
    password[index2]=temp;    
  }
  console.log(options)

  return password.join("").substring(0,options.length);
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}