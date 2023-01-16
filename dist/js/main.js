function toggleMenu() {
  const hamburger = document.querySelector("#hamburger");
  const navList = document.querySelector(".nav__list-mobile");

  hamburger.classList.toggle("open");
  navList.classList.toggle("mobile__open");
}
