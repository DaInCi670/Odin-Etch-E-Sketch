"Use strict";

const etchMenuContainer = document.querySelector(".etch-menu-container");
const etchColor = document.querySelector("#etch-color");
const etchRainbow = document.querySelector("#etch-rainbow");
const etchMenu = document.querySelectorAll("#etch-menu");
const etchClear = document.querySelector("#etch-clear");
const etchEraser = document.querySelector("#etch-eraser");

const buttonArr = [etchRainbow, etchColor, etchClear, etchEraser];

etchMenuContainer.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "etch-color":
      highlightButton(buttonArr, "etch-color");
      break;
    case "etch-rainbow":
      highlightButton(buttonArr, "etch-rainbow");
      break;
    case "etch-eraser":
      highlightButton(buttonArr, "etch-eraser");
      break;
    case "etch-clear":
      highlightButton(buttonArr, "etch-clear");
      break;
  }
});

//Function to highlight button on focus
function highlightButton(buttonArr, button) {
  const addHighlight = buttonArr.filter((item) => {
    return item.id === button;
  });
  buttonArr.forEach((element) => {
    return element.classList.remove("etch-menu-highlight");
  });

  addHighlight.forEach((element) => {
    return element.classList.add("etch-menu-highlight");
  });
}
