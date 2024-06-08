const field = document.querySelector(".field");
const button = document.querySelector(".btn");
const buttonChange1 = document.querySelector(".btn__change1");
const buttonChange2 = document.querySelector(".btn__change2");
const fieldForRandom1 = document.querySelector(".field__for__random1");
const fieldForRandom2 = document.querySelector(".field__for__random2");
const button1F2 = document.querySelector(".btn1")
const button2F2 = document.querySelector(".btn2")
const field1F2=document.querySelector(".field1")
const field2F2=document.querySelector(".field2")
buttonChange1.addEventListener("click", () => {
if(!fieldForRandom2.classList.contains("none2")){
    fieldForRandom2.classList.remove("active2")
    fieldForRandom2.classList.add("none2")
}
    if (fieldForRandom1.classList.contains("none1")) {
    fieldForRandom1.classList.remove("none1");
    fieldForRandom1.classList.add("active1");
  } else {
    fieldForRandom1.classList.remove("active1");
    fieldForRandom1.classList.add("none1");
  }
});
buttonChange2.addEventListener("click", () => {
    if(!fieldForRandom1.classList.contains("none1")){
        fieldForRandom1.classList.remove("active1")
        fieldForRandom1.classList.add("none1")
    }
    if (fieldForRandom2.classList.contains("none2")) {
      fieldForRandom2.classList.remove("none2");
      fieldForRandom2.classList.add("active2");
    } else {
      fieldForRandom2.classList.remove("active2");
      fieldForRandom2.classList.add("none2");
    }
  });

button.addEventListener("click", () => {
  field.innerHTML = "";
  const img = `<img class="img" src="./images/${Math.round(
    Math.random() * (6 - 1) + 1
  )}.png" alt="img">`;
  field.innerHTML = img;
});
button1F2.addEventListener("click",()=>{
    field1F2.innerHTML = "";
    const img = `<img class="img" src="./images/${Math.round(
      Math.random() * (6 - 1) + 1
    )}.png" alt="img">`;
    field1F2.innerHTML = img;
})
button2F2.addEventListener("click",()=>{
    field2F2.innerHTML = "";
    const img = `<img class="img" src="./images/${Math.round(
      Math.random() * (6 - 1) + 1
    )}.png" alt="img">`;
    field2F2.innerHTML = img;
})
