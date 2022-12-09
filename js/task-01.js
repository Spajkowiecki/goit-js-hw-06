const ul = document.querySelector("#categories");
let items = ul.querySelectorAll(".item");

console.log(`Number of categories: ${ul.childElementCount}`);
//tablica elementów ul#categories
//pętlą for each listuje elementy
items.forEach((item) => {
  //pobieram z pierwszego dziecka li: <h2>
  console.log(`Category: ${item.firstElementChild.textContent}`);
  //pobieram z ostatniego obiektu pobieram liczbę elementów: <ul>
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
