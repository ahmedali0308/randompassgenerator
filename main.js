const passwordBox = document.getElementById("password");
const slidervalue = document.getElementById("slidervalue");
var length = slidervalue.value;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase+lowerCase+number+symbol;

function sliderMoved(value){
    slidervalue.innerHTML = value;
    length = value;
}

function generatePassword(){
    let password = "";
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}