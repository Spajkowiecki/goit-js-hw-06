let counterValue = 0;
const counter = document.querySelector("#counter");

let increment = counter.lastElementChild;
let decrement = counter.firstElementChild;
let count = counter.querySelector("#value");

increment.addEventListener("click", () => (count.textContent = counterValue++));
decrement.addEventListener("click", () => (count.textContent = counterValue--));
