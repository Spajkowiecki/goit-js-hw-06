let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  output.textContent = input.value;
  if (input.value == "") {
    output.textContent = "Anonymous";
  }
});
