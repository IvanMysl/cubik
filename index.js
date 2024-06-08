const field = document.querySelector(".field");
const button = document.querySelector(".btn");
const buttonChange1 = document.querySelector(".btn__change1");
const buttonChange2 = document.querySelector(".btn__change2");
const fieldForRandom1 = document.querySelector(".field__for__random1");
const fieldForRandom2 = document.querySelector(".field__for__random2");

buttonChange1.addEventListener("click", () => {
  fieldForRandom1.style.display = "flex";
  fieldForRandom1.style.flexDirection = "column";
  fieldForRandom1.style.alignItems = "center";
});
button.addEventListener("click", () => {
  field.innerHTML = "";
  const img = `<img class="img" src="./images/${Math.round(
    Math.random() * (6 - 1) + 1
  )}.png" alt="img">`;
  field.innerHTML = img;
});
