const selectShape = document.querySelector("#select-shape");
const circle = document.querySelector("#circle");
const rect = document.querySelector("#rect");
const ellipse = document.querySelector("#ellipse");
const line = document.querySelector("#line");
const polyline = document.querySelector("#polyline");
const polygon = document.querySelector("#polygon");
const path = document.querySelector("#path");

const shapes = {
  circle,
  rect,
  ellipse,
  line,
  polyline,
  polygon,
  path,
};

const inputs = document.querySelectorAll("input");

// input events
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const target = selectShape.value;
    const attr = input.getAttribute("attr");
    if (attr && target) {
      const shape = shapes[target];
      shape.setAttribute(attr, e.target.value);
    }
  });
});
