const field = document.querySelector(".field");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
    field.innerHTML="";
    const img = `<img class="img" src="./images/${Math.round(
      Math.random() * (6 - 1) + 1
    )}.png" alt="img">`;
    field.innerHTML = img;
});
