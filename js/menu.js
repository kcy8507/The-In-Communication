const toggleBtn = document.querySelector(".navbar__toggleBtn");
const nav = document.querySelector(".sidenav");
const cancelBtn = document.querySelector(".cancel");
const blackBg = document.querySelector(".black_bg");
const menuList = document.querySelector(".sidenav__menu");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  blackBg.classList.toggle("hidden");
  document.querySelector("html").style.overflow = "hidden";
});
cancelBtn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  blackBg.classList.toggle("hidden");
  document.querySelector("html").style.removeProperty("overflow");
});
menuList.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  blackBg.classList.toggle("hidden");
  document.querySelector("html").style.removeProperty("overflow");
});
