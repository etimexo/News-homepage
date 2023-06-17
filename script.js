const toggler = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-menu")
toggler.addEventListener("click", () => {
    toggler.classList.toggle("active")
    navMenu.classList.toggle("active")
}) 
document.addEventListener("click", (event) => {
    const target = event.target
    const isNavMenuClicked = target.classList.contains("nav-menu") || target.closest(".nav-menu")
    const isTogglerClicked = target.classList.contains("toggle") || target.closest(".toggle")
    if (!isNavMenuClicked && !isTogglerClicked) {
      toggler.classList.remove("active")
      navMenu.classList.remove("active")
    }
})
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    toggler.classList.remove("active")
    navMenu.classList.remove("active")
}))