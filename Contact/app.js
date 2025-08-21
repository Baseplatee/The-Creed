const inputElement = document.getElementById("username");
const remaningCharsElement = document.querySelector("span");
const maxLength = inputElement.maxLength;

function calculateRemaningChars(event) {
  const inputLength = event.target.value.length;
  const remaningChars = maxLength - inputLength;

  remaningCharsElement.textContent = remaningChars;

  if (remaningChars === 0) {
    inputElement.classList.add("error");
    remaningCharsElement.add("error");
  } else if (remaningChars <= 10) {
    inputElement.classList.add("warning");
    remaningCharsElement.classList.add("warning");

    inputElement.classList.remove("error");
    remaningCharsElement.classList.remove("error");
  } else {
    inputElement.classList.remove("warning");
    remaningCharsElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", calculateRemaningChars);
