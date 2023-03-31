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
  var charTypes = [];

  // First prompt user to see if they would like lowercase letters
   var lower = confirm("Press ok to include lowercase characters in your password, else cancel to not include lowercase characters.") ;

  // Conditional statement
  if(lower === true) {
    charTypes.push(0);
  }

  // Alert validation message
  alert(`You chose ${lower} for lowercase characters in your password.`);

  // Second confirm user to see if they would like uppercase letters
  var upper = confirm("Press ok to include uppercase characters in your password, else cancel to not include uppercase characters.");

  // Conditional statement
  if(upper === true) {
    charTypes.push(1);
  }

  // Alert validation message
  alert(`You chose ${upper} for uppercase characters in your password.`);

  // Third confirm user to see if they would like numerics in their password
  var num = confirm("Press ok to include numeric characters in your password, else cancel to not include numeric characters.");

  // Conditional statement
  if(num === true) {
    charTypes.push(2);
  }

  // Alert validation message
  alert(`You chose ${num} for numeric characters in your password.`);

  // Fourth confirm user to see if they would like special characters in their password
  var special = confirm("Press ok to include special characters in your password, else cancel to not include special characters.");

  // Conditional statement
  if(special === true) {
    charTypes.push(3);
  }

  // Alert validation message
  alert(`You chose ${special} for special characters in your password.`);
  console.log(charTypes);

//--------------------FOR LOOP SECTION--------------------------//

  // Variable to concate the password to return later
  var password = "";

  // For loop to iterate through my charType index
  for (var i = 0; i < passwordLength; i++) {
    
    //variable to choose a random index on my charType
    var charType = charTypes[Math.floor(Math.random() * charTypes.length)];
    console.log(charType)
    
    // Conditional to check if the random charType has the value 0 indicating wanting lowercase characters.
    if (charType === 0) {

      // Creating a variable to store a random number value between 97 and 122 because those are the ascii values of lowercase letters.
      // 122 - 97 = 25, so I need to pick a random num between 0 and 25
      // Since 97 is the start of the lowercase codes i will add the random number choice to 97
      // I will then have a ascii number code to convert to a lowercase letter
      // Got this information from programiz.com
      var lowercaseCode = Math.floor(Math.random() * 25) + 97;
      
      // Now I need a variable to store and convert the ascii code to lowercase
      // Googled and found a w3schools resource on how to convert a Unicode value to characters.
      var convertCode = String.fromCharCode(lowercaseCode);

      // Now I need to concatenate/append the letter to the password string
      // mdn web docs resource says i can use the concat() string method, this method coerces args to strings unlike the + concat method.
      password = password.concat(convertCode);
    }
    
    // Additional else if statements are similar to the if statement just checking different values.
    else if (charType === 1) {

      var uppercaseCode = Math.floor(Math.random() * 25) + 65;

      var convertCode = String.fromCharCode(uppercaseCode);

      password = password.concat(convertCode);
    }

    else if (charType === 2) {

      var numCode = Math.floor(Math.random() * 9) + 48;

      var convertCode = String.fromCharCode(numCode);

      password = password.concat(convertCode);
    }

    else if (charType === 3) {

      var specialCode = Math.floor(Math.random() * 5) + 33;
      
      var convertCode = String.fromCharCode(specialCode);

      password = password.concat(convertCode);
    }

    // Creating an alert message for if no character types are chosen
    else {

      alert("Sorry, You must select at least on character type in order for me to generate a password!")

      // Return statement to add the message to the password box
      return "No Password Created! Please Try Again!"

    }

  }
  // Return the password to be stored in the password box on the site
  return password;
  
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
