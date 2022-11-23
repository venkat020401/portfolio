//script for responsive hamburger

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

navbar.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

// empty the input page after send message

function okay() {

  setTimeout(function () {

  document.getElementById("email").value="";
  document.getElementById("phone").value="";
  document.getElementById("message").value="";
  document.getElementById("name").value="";
}, 5000);

}
