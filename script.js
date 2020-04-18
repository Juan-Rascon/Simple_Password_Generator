// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercase = false;
var numeric = false;
var specialcharacters = false;
var uppercase = false;

function addLowerCase() {
    var r = confirm("Should your password include lowercase characters?!\nPress OK for YES or Cancel for NO.");
      return r;
  };
  
function addNumeric() {
    var r = confirm("Should your password include numeric characters?!\nPress OK for YES or Cancel for NO.");
    return r;
};

function addSpecialCharacters() {
    var r = confirm("Should your password include special characters?!\nPress OK for YES or Cancel for NO.");
    return r;
};

function addUpperCase() {
    var r = confirm("Should your password include Uppercase characters?!\nPress OK for YES or Cancel for NO.");
    return r;
};

function validateLength(userPW){
    //Check to see if the input is a not a number
    if (userPW == null){
        return false;
    }

    else if (isNaN(userPW)) {
        alert("Please enter a number!");
        return true;
    }
    //Check to see if input is a number
    else if (Number.isInteger(parseInt(userPW))){
            if (userPW < 8) {
                alert("Please enter a length of at least 8 characters!");
                return true;
            }
            else if (userPW >128){
                alert("Please enter a length of no more than 128 characters!");
                return true;
            }
            else {
                return false;
            }
    }
  
    else {
        alert("Please enter a whole number!");
        return true;
    }
};

function generatePassword(passwordLength, islowercase, isNumeric, isSpecial, isUpper) {
    var mypassword = '';
    var PWcriteria = { 
                     lc: [islowercase, 'abcdefghijklmnopqrstuvwxyz'],
                     num: [isNumeric,'0123456789'],
                     uc: [isUpper,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
                     chars: [isSpecial,"!\"#$%&'()*+,-./:;<=>?@[\]^_{|}~"],
                    };

    for(i=0; i<passwordLength;i++){
        do {
            var choice = Math.floor(Math.random()* (Object.keys(PWcriteria).length));
            if (Object.values(PWcriteria)[choice][0]){
                mypassword += Object.values(PWcriteria)[choice][1][(Math.floor(Math.random()* (Object.values(PWcriteria)[choice][1].length)))];
            }

        } while (!Object.values(PWcriteria)[choice][0])
    
    }

    return mypassword;

};

function writePassword(){
//ASK USER FOR PASSWORD REQUIREMENTS
    do {
        var pwLength = prompt("What length would you like your password to be?");
    }
    while (validateLength(pwLength));

    if (!(pwLength===null)){
        do {
            alert("You must pick at least one of the following password criteria:\nLowerCase\nNumeric\nSpecial Characters\nUppercase");
            lowercase = addLowerCase();
            numeric = addNumeric();
            specialcharacters = addSpecialCharacters();
            uppercase = addUpperCase();
        }
        while (!(lowercase || numeric || specialcharacters || uppercase));
    
        var password = generatePassword(parseInt(pwLength), lowercase, numeric, specialcharacters, uppercase);
        passwordText.textContent = password;
    }

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
