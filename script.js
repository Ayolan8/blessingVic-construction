const dropdownMenu = document.getElementById("dropdown-container");
const nav = document.querySelector("nav");
const year = document.getElementById("year");
const navLink = document.querySelectorAll(".nav-links");

dropdownMenu.addEventListener("click", function(){
    if (nav.style.width === "100vw"){
        nav.style.width = "0";
    }else {
        nav.style.width = "100vw";
    }

    dropdownMenu.classList.toggle("active");
});

let dt = new Date().getFullYear();
year.innerHTML = dt;

function closeNav(){
  for (let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", () => {
      nav.style.width = "0";
    })
  }
}

closeNav();
