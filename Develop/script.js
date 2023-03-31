// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generatePassword function
function generatePassword() {

  //------PASSWORD LENGTH SECTION---------//

  // Variable to store the password length
  var passwordLength = (prompt("Please enter a numeric value between 8 and 128 to determine how long you would like your password to be."));
  console.log(passwordLength);

  // While loop to check proper password length value
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must be an a numeric value and no less than 8 or greater than 128. Please try again!");

    // Re-asking for a password and using the same variable to store the answer
    var passwordLength = (prompt("Please choose the length of your password."));
  };

  // Give an alert message to verify the password length that was chosen
  alert(`Thank you, your password will be ${passwordLength} characters long.`);

  //-----------LOWERCASE,UPPERCASE,NUMERIC,SPECIAL CHARACTER CONFIRM SECTION------------//

  // Array to store if user wants to include lowercase, uppercase, numeric, and/or special characters.
  var charType = [];

  // First prompt user to see if they would like lowercase letters
   var lower = confirm("Press ok to include lowercase characters in your password, else cancel to not include lowercase characters.") ;

  // Conditional statement to determine if i want to append a 1 if the lower bool is true or a 0 if the bool is false
  if(lower === true) {
    charType.push(1);
  } else {
    charType.push(0)
  }
  console.log(lower)
  console.log(charType)

  // Second confirm user to see if they would like uppercase letters
  var upper = confirm("Press ok to include uppercase characters in your password, else cancel to not include uppercase characters.");

  // Conditional statement to determine if I want to append a 1 if the Upper bool is true or a 0 if the bool is false
  if(upper === true) {
    charType.push(1);
  }else {
    charType.push(0)
  }
  console.log(upper)
  console.log(charType)

  // Third confirm user to see if they would like numerics in their password
  var num = confirm("Press ok to include numeric characters in your password, else cancel to not include numeric characters.");

  // Conditional statement to determine if I want to append a 1 or 0 depending on nums true or false value.
  if(num === true) {
    charType.push(1);
  }else {
    charType.push(0);
  }
  console.log(num)
  console.log(charType)

  // Fourth confirm user to see if they would like special characters in their password
  var special = confirm("Press ok to include special characters in your password, else cancel to not include special characters.");

  // Conditional statement to determine if I want to append a 1 or 0 depending on special true or false value.
  if(special === true) {
    charType.push(1);
  }else {
    charType.push(0)
  }
  console.log(special)
  console.log(charType)
  
}

//------------------------------------------------------------------------------------//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
