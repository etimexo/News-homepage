const toggler = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-menu")
const togglerImage = toggler.querySelector("img");
const toggleOpenImage = "./assets/images/icon-menu.svg";
const toggleCloseImage = "./assets/images/icon-menu-close.svg";
toggler.addEventListener("click", () => {
    toggler.classList.toggle("active")
    navMenu.classList.toggle("active")
    if (toggler.classList.contains("active")) {
        togglerImage.src = toggleCloseImage;
      } else {
        togglerImage.src = toggleOpenImage;
      }
}) 


document.addEventListener("click", (event) => {
    const target = event.target
    const isNavMenuClicked = target.classList.contains("nav-menu") || target.closest(".nav-menu")
    const isTogglerClicked = target.classList.contains("toggle") || target.closest(".toggle")
    if (!isNavMenuClicked && !isTogglerClicked) {
      toggler.classList.remove("active")
      navMenu.classList.remove("active")
      togglerImage.src = toggleOpenImage;
    }
})
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    toggler.classList.remove("active")
    navMenu.classList.remove("active")
}))