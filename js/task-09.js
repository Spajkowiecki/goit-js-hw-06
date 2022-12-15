function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
});
