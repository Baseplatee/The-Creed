const inputElement = document.getElementById("username");
const remaningCharsElement = document.querySelector("span");
const maxLength = inputElement.maxLength

function calculateRemaningChars (event) {
const inputLength = event.target.value.length
const remaningChars = maxLength - inputLength

remaningCharsElement.textContent = remaningChars
}


inputElement.addEventListener("input", calculateRemaningChars)