let select = document.querySelectorAll("select");
let selectArray = [...select];
// let inputs = document.querySelectorAll(".input");
let verifyBtn = document.querySelector(".btn-verificar");
let verificarPara = document.querySelector(".verificar-p");

verifyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(typeof inputs);
  let pass = selectArray.reduce((s, select) => {
    return s + select.value;
  }, "");
  console.log(pass);
  verificarPara.classList.remove("display-none");
  let msg;
  switch (pass) {
    case "911":
      msg = "password 1 correcto";
      break;
    case "714":
      msg = "password 2 correcto";
      break;
    default:
      msg = "password incorrecto";
  }

  verificarPara.innerHTML = msg;
});
