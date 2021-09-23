// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var generateBtn = document.querySelector("#generate");
// lowercase, uppercase, numeric, and special characters
var character = ["!", "#", "$", "%", "&", "*", "+", ",", "-",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var password = "";


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    // reset passowrd 

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    // GIVEN I need a new, secure password

    // WHEN prompted for the length of the password

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    // THEN I choose a length of at least 8 characters and no more than 128 characters
   
    if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    }

    //  validations 
    else {

        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    // posivilites 
   

    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(numbers, lowercase, uppercase);
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(numbers, uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(numbers, lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(uppercase, lowercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = numbers.concat(lowercase, uppercase);
    }
    // two posvice options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(numbers);
    }
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowercase);

    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(numbers);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = numbers.concat(uppercase);
    }
    // one positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = numbers;
    }
    else if (confirmLowercase) {
        choices = lowercase;
    }
    //  uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(uppercase);
    };

    //  generated amount of length
    var password = [];


    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        ps = choices.length;
        var pickChoices = choices[Math.floor(Math.random() * ps)];
        password.push(pickChoices);
    }

    // password array it to a it to a string

    var pw = password.join("");
    console.log(pw);
    UserInput(pw);
    return pw;
}

// Changed function input to use textcontent
function UserInput(pw) {
    document.getElementById("password").textContent = pw;

}
var copy = document.querySelector("#generate");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("password");
    alert("Password copied to clipboard!");
}

