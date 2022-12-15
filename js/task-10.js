const { log, error, warn, info } = console;

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
  // if (allBoxes.length == 0) {
  //   for (let i = 1; i <= amount; i++) {
  //     console.log("[DIV]:" + i);
  //     let div = document.createElement("div");
  //     div.style.width = `${30 + i * 10}px`;
  //     div.style.height = `${30 + i * 10}px`;
  //     div.style.background = getRandomHexColor();

  //     boxes.appendChild(div);
  //   }
  // }
  //sprawdzenie czy juz cos jest dodane i sprawdzenie ile
  if (boxes.children.length <= 0) {
    warn("Tablica nie posiada elementów: %s", boxes.children.length);
    console.log(
      "generuje kwadraty od: %s do: %s",
      boxes.children.length,
      amount
    );
    for (let i = 0; i < amount; i++) {
      log("dodaje kwadracik: " + i);
      let div = document.createElement("div");
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.background = getRandomHexColor();
      boxes.appendChild(div);
    }
  } else {
    let actual = boxes.children.length;
    let newValue = Number(amount) + actual;
    info("W tablicy juz cos jest: " + actual);
    log(`Dorabiam: ${amount}`);
    for (let i = actual; i < newValue; i++) {
      log("dodaje kwadracik: " + i);
      let div = document.createElement("div");
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.background = getRandomHexColor();
      boxes.appendChild(div);
    }
  }
}

function destroyBoxes() {
  // console.log("liczba obiektow: " + boxes.children.length);
  // for (let i = boxes.children.length - 1; i >= 0; i--) {
  //   boxes.children[i].remove();
  // }
  //sprawdzenie czy jest cos do usuniecia
  if (boxes.children.length <= 0) {
    error("Tablica jest pusta!");
  } else {
    warn("Nastepuje usuniecie confetti:", boxes.children.length);
    for (let i = boxes.children.length - 1; i >= 0; i--) {
      boxes.children[i].remove();
    }
  }
}
