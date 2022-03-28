// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//set character code 
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
};

//use ASC2 code table to set character codes
const lowerCharCodes = arrayFromLowToHigh(97, 122);
const upperCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

//generate includes
function generatePassword(length, includeUppercase, includeNumber, includeSymbols) {
    const passwordChar = [] //set new password null value
    let charCodes = lowerCharCodes;
    if (includeUppercase) { charCodes = charCodes.concat(upperCharCodes) };
    if (includeNumber) { charCodes = charCodes.concat(numberCharCodes) };
    if (includeSymbols) { charCodes = charCodes.concat(symbolCharCodes) };

    //generate logic
    for (let i = 0; i < length; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordChar.push(String.fromCharCode(character));
    }
    return passwordChar.join(""); //return passwordChar value
}

// Write password to the #password input
function writePassword() {

    //ask player to custom the password  //match password to player's customization
    var length = window.prompt("How many characters do you want to include");
    if (length < 8 || length > 128) {
        window.alert("Please Input a valid Number Range 8 to 128");
        return false;
    };
    var includeUppercase = window.confirm("Include Uppercase?");
    var includeNumber = window.confirm("Include Numbers?");
    var includeSymbols = window.confirm("Include Symbols?");

    const password = generatePassword(length, includeUppercase, includeNumber, includeSymbols);
    document.getElementById("password").value = password;
}