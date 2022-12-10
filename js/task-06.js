const body = document.querySelector("body");

const input = body.querySelector("#validation-input");
let value = input.value;
input.addEventListener("blur", checkInput);
input.addEventListener("focus", checkInput);
input.addEventListener("onchange", checkInput);

function checkInput() {
  let value = input.value;
  if ([...value].length < input.getAttribute("data-length", 6)) {
    input.classList.add("invalid");
  }
  if ([...value].length >= input.getAttribute("data-length", 6)) {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  }
}
