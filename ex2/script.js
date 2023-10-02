let input1 = document.querySelector("#btn-1");
let input2 = document.querySelector("#btn-2");
let input3 = document.querySelector("#btn-3");
// let inputs = [input1, input2, input3];
let inputs = [...document.querySelectorAll(".input")];
let verifyBtn = document.querySelector(".btn-verificar");
let verificarPara = document.querySelector(".verificar-p");

verifyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(typeof inputs);
  let sum = inputs.reduce((s, input) => {
    return +input.value + s;
  }, 0);
  console.log(sum);
  verificarPara.classList.remove("display-none");
  if (sum > 10) {
    verificarPara.innerHTML = "Llevas demasiados stickers";
  } else {
    verificarPara.innerHTML = `Llevas ${sum} stickers`;
  }
});
