//szukanie obiektu o 'id=text'
const text = document.querySelector("span#text");
const input = document.querySelector("input#font-size-control");

input.addEventListener("input", () =>
  text.setAttribute("style", `font-size:${input.value}px`)
);
