function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const destroy = document.querySelector(`[data-destroy]`);
const create = document.querySelector(`[data-create]`);
const input = document.querySelector("input");

destroy.addEventListener("click", () => destroyBoxes());
create.addEventListener("click", () => createBoxes(input.value));

//variable for #boxes
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    console.log("[DIV]:" + i);
    let div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();

    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  console.log("liczba obiektow: " + boxes.children.length);
  for (let i = boxes.children.length - 1; i >= 0; i--) {
    boxes.children[i].remove();
  }
}
