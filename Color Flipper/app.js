const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const _body = document.getElementById("main");

btn.addEventListener("click", function () {
  //get a random number between 0-3
  const randomNumber = getRandomNumber();

  _body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
