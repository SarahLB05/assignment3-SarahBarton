const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  toggleBtn.textContent = body.classList.contains("night-mode")
    ? "Switch to Day Mode"
    : "Switch to Night Mode";
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
