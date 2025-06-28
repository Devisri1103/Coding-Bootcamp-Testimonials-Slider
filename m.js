const slider = document.getElementById('slider');
const addBtn = document.getElementById('addBtn');
const addFileBtn = document.getElementById('addFileBtn');
const fileInput = document.getElementById('fileInput');
let index = 0;

addBtn.addEventListener('click', () => {
  addFileBtn.style.display = 'inline-block';
});
addFileBtn.addEventListener('click', () => {
  fileInput.click();
});
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    const imageUrl = event.target.result;
    createUserSlide(imageUrl);
  };
  reader.readAsDataURL(file);
  addFileBtn.style.display = 'none';
});
function createUserSlide(imageUrl) {
  const newSlide = document.createElement('div');
  newSlide.classList.add('slide');
  newSlide.innerHTML = `
    <div class="testimonial-slide">
      <div class="testimonial-image-wrapper">
        <img src="${imageUrl}" alt="Guest User Testimonial Image" class="testimonial-image">
      </div>
      <div class="testimonial-content">
        <blockquote class="testimonial-quote">“This is a wonderful experience. Highly recommended.”</blockquote>
        <div class="testimonial-author">
          <h3 class="testimonial-name">Guest User</h3>
          <span class="testimonial-role">Verified Reviewer</span>
        </div>
      </div>
    </div>
  `;
  slider.appendChild(newSlide);
  showSlide(index);
}
function showSlide(i) {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
  showSlide(++index);
}

function prevSlide() {
  showSlide(--index);
}
setInterval(nextSlide, 8000);
showSlide(index);
