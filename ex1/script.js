let imagen = document.querySelector(".orangutan");

imagen.addEventListener("click", (e) => {
  target = e.target;
  //   console.log(target);
  target.classList.toggle("border");
});
