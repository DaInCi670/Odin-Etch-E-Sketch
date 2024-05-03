"Use strict";

const etchMenuContainer = document.querySelector(".etch-menu-container");
const etchGridSelect = document.querySelector("#etch-grid-size");
const etchColor = document.querySelector("#etch-color");
const etchRainbow = document.querySelector("#etch-rainbow");
const etchMenu = document.querySelectorAll("#etch-menu");
const etchClear = document.querySelector("#etch-clear");
const etchEraser = document.querySelector("#etch-eraser");
const etchBox = document.querySelector(".etch-box");

const buttonArr = [
  etchGridSelect,
  etchRainbow,
  etchColor,
  etchClear,
  etchEraser,
];

//Function to create grid
function createGrid(size) {
  if (etchBox.innerHTML) {
    etchBox.innerHTML = "";
  }

  for (let i = 0; i < size * size; i++) {
    const git = document.createElement("div");
    git.style.width = `${etchBox.clientWidth / size}px`;
    git.style.height = `${etchBox.clientHeight / size}px`;
    etchBox.appendChild(git);

    etchClear.addEventListener("click", () => {
      git.style.backgroundColor = "white";
    });

    git.addEventListener("mouseover", () => {
      if (etchEraser.classList[1] === "etch-menu-highlight") {
        git.style.backgroundColor = "white";
      } else if (etchRainbow.classList[1] === "etch-menu-highlight") {
        git.style.backgroundColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()}, )`;
      } else git.style.backgroundColor = "black";
    });
  }
}

//Function to generate random numbers(for colors)
function randomizer() {
  let rainbow = Math.ceil(Math.random() * 255);
  return rainbow;
}

document.addEventListener("DOMContentLoaded", () => {
  etchColor.classList.add("etch-menu-highlight");
  createGrid(16);
});

//Function to highlight button on focus
function highlightButton(buttonArr, button) {
  buttonArr.forEach((element) => {
    if (element.id === button) {
      element.classList.add("etch-menu-highlight");
    } else {
      element.classList.remove("etch-menu-highlight");
    }
  });
}

etchMenuContainer.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "etch-grid-size":
      highlightButton(buttonArr, "etch-grid-size");
      let setSize = prompt("Select size");
      while (setSize > 100) {
        setSize = prompt("Too large");
      }
      createGrid(setSize);
      break;
    case "etch-color":
      highlightButton(buttonArr, "etch-color");
      randomizer();
      break;
    case "etch-rainbow":
      highlightButton(buttonArr, "etch-rainbow");
      console.log(etchRainbow.classList[1] === "etch-menu-highlight");
      break;
    case "etch-eraser":
      highlightButton(buttonArr, "etch-eraser");
      break;
    case "etch-clear":
      highlightButton(buttonArr, "etch-clear");
      break;
  }
});
