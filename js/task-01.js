const listElement = document.querySelector("ul#categories");
const listItems = listElement.querySelectorAll("li.item");
console.log(`Number of categories: ${listItems.length}`);
console.log();

for (const item of listItems) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
  console.log();
}
