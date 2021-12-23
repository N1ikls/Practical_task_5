let span = document.querySelector(".menu__icon");
let menu_body = document.querySelector(".menu__body");
let main__title = document.querySelector(".main--block__title")
span.addEventListener("click", () => {
  menu_body.classList.toggle("active");
  span.classList.toggle("active");
  main__title.classList.toggle("active");
});
