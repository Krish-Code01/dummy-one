const clr = document.getElementById("clr");
const cng = document.getElementById("cng");

window.addEventListener("load", function () {
  const savedColor = localStorage.getItem("divColor");
  if (savedColor) {
    clr.style.backgroundColor = savedColor;
  }
});

function changeColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  clr.style.backgroundColor = randomColor;
  localStorage.setItem("divColor", randomColor);
  location.reload();
}

cng.addEventListener("click", changeColor);
