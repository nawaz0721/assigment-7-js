// Question 1
// Password Generator
// Generate a random password of length 10 characters. Ensure that the password contains a mix of uppercase letters, lowercase letters, and digits. Print the generated password.

var passwordInput = document.getElementById("password");
var passwordIs = document.getElementById("passwordIs");

function passGenerate(){
    var password = passwordInput.value;   
    passwordIs.innerText = password;
}

// Question 2
// Word Reverser 
// Ask the user to input a sentence. Reverse the order of words in the sentence and print the reversed sentence.

var sentence = document.getElementById("sentance");
var answer = document.getElementById("answer")

function Reverse(){
    var string = sentence.value;
    var reverseString = " "; 

    for(var i = string.length -1; i >= 0 ; i--){
        reverseString += string[i];
    }
    
    answer.innerText = reverseString;
}

// Question 3
// Word Capitalizer:
// Ask the user to input a sentence. Capitalize the first letter of each word in the sentence and print the modified sentence.

var capitalize = document.getElementById("capitalize");

var letter = document.getElementById("letter");

function Capitalize() {
    var capValue =  capitalize.value;
    var word = capValue.split(" ");
    
    for(i = 0; i < word.length; i++){
        var words = word[i];
        word[i] = words[0].toUpperCase() + words.slice(1);
    }
    var modifiedSentence = word.join(' ');

    letter.innerText = modifiedSentence;
}

// Question 4
// Word Finder:
// Ask the user to input a sentence and a word. Check if the word is present in the sentence. If it is, print "Word found", otherwise print "Word not found".

function wordFinder(){
    var getSentance = document.getElementById("sent").value;
    var word = document.getElementById("word").value;
    var result = document.getElementById("result");
    
    var words = getSentance.split(" ");
    var found = false;

    for(i = 0; i < words.length; i++){
        if (words[i] === word) {
            found = true;
            break;
        }
    }
        if(found) {    
            result.innerText = "Word Found"
        }
        else{
            result.innerText = "Word not Found"
        }  
}

// Question 4
// String Concatenation:
// Ask the user to input their first name and last name separately. Concatenate the first name and last name together with a space in between and print the full name.

function ame(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    var Name = "Your Full Name is " + firstName + " "+ lastName;
    
    var fullName =  document.getElementById("fullName");
    fullName.innerText = Name;
}