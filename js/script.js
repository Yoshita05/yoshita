let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
// Reference from Friend for up arrow
let scrollToTopBtn = document.getElementsByClassName("up-arrow")[0];

scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})