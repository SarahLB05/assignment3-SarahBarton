window.addEventListener('DOMContentLoaded', () => {
    const isModeActive = localStorage.getItem('night-mode') === 'true';
    if (isModeActive) {
        document.body.classList.add('night-mode');
    }
});

const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const isActive = document.body.classList.toggle("night-mode");

  localStorage.setItem('night-mode', isActive)

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
