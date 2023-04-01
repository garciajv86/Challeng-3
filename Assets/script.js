// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generatePassword function
function generatePassword() {

  //------PASSWORD LENGTH SECTION---------//

  // Variable to store the password length
  var passwordLength = (prompt("Please enter a numeric value between 8 and 128 to determine how long you would like your password to be."));

  // While loop to check proper password length value
  // Got this idea from stack overflow
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {

    alert("Password must be an a numeric value and no less than 8 or greater than 128. Please try again!");

    // Re-asking for a password and using the same variable to store the answer
    var passwordLength = (prompt("Please choose the length of your password."));
  };

  // Give an alert message to verify the password length that was chosen
  // w3schools and mdn docs shows that the ${variable} can be used on a template literal which are in (`)
  alert(`Thank you, your password will be ${passwordLength} characters long.`);

  //-----------LOWERCASE,UPPERCASE,NUMERIC,SPECIAL CHARACTER CONFIRM SECTION------------//

  // Array to store a value associated with each prompt to see if user wants to include lowercase, uppercase, numeric, and/or special characters.
  var charTypes = [];

  // First prompt user to see if they would like lowercase letters
   var lower = confirm("Press ok to include lowercase characters in your password, else cancel to not include lowercase characters.") ;

  // Conditional statement to store a number value that will be associated with the lowercase letters, any unique value could be used here
  // Since confirm returns a boolean value I can just check if the value is true/false, if true I can place the lowercase associated value to my array
  // The same algorithm can be applied to all the following if statements as this one
  if(lower === true) {
    charTypes.push(0);
  }

 
  alert(`You chose ${lower} for lowercase characters in your password.`);

  
  var upper = confirm("Press ok to include uppercase characters in your password, else cancel to not include uppercase characters.");

  if(upper === true) {
    charTypes.push(1);
  }

  alert(`You chose ${upper} for uppercase characters in your password.`);

  var num = confirm("Press ok to include numeric characters in your password, else cancel to not include numeric characters.");

  if(num === true) {
    charTypes.push(2);
  }

  alert(`You chose ${num} for numeric characters in your password.`);

  var special = confirm("Press ok to include special characters in your password, else cancel to not include special characters.");

  if(special === true) {
    charTypes.push(3);
  }

  alert(`You chose ${special} for special characters in your password.`);

//--------------------FOR LOOP SECTION--------------------------//

  // With this variable I will be able to concatenate the random characters to and return it at the end of the program.
  var password = "";

  // For loop to iterate through my charType index based on the passwordLength value of the user
  for (var i = 0; i < passwordLength; i++) {
    
    //Local variable to choose a random index on my charTypes array length, that random index has the associated value 0,1,2 or 3 based on users choice
    var charType = charTypes[Math.floor(Math.random() * charTypes.length)];
    
    // Conditional to check if the random charType has the value 0 indicating wanting lowercase characters.
    if (charType === 0) {

      // Creating a variable to store a random number value between 97 and 122 because those are the ascii values of lowercase letters.
      // 122 - 97 = 25, so I need to pick a random num between 0 and 25
      // Since 97 is the start of the lowercase codes i will add the random number choice to 97
      // I will then have a ascii number code to convert to a lowercase letter
      // Got this information from programiz.com, also referenced a table for techonthenet.com/ascii/chart.php
      // The same algorithm can be used on the following else if statements, just with different ascii values of the characters
      var lowercaseCode = Math.floor(Math.random() * 25) + 97;
      
      // Now I need a variable to store and convert the ascii code to lowercase
      // Googled and found a w3schools resource on how to convert a Unicode value to characters.
      var convertCode = String.fromCharCode(lowercaseCode);

      // Now I need to concatenate/append the letter to the password string
      // mdn web docs resource says i can use the concat() string method, this method coerces args to strings unlike the + concat method.
      password = password.concat(convertCode);
    }
    
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

      alert("Sorry, You must select at least one character type in order to generate a password!")

      // Return statement to add the message to the password box
      return "No Password Created!"

    }

  }
  // Return statement to return the password value to the function
  return password;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
