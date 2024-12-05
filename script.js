// Array of images for "RoboDovo in Action"
const roboImages = [
    "Images/5.jpg",
    "Images/6.jpg"
];
  
// Initialize the current image index
let currentIndex = 0;
  
// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Show modal when an image is clicked
const images = document.querySelectorAll(".image-gallery img");
images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.textContent = this.alt;

        // Check if the clicked image is "RoboDovo in Action"
        if (this.alt === "RoboDovo in Action") {
            currentIndex = 0; // Reset to the first image in roboImages
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    };
});
  
// Close the modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};
  
// Navigate to the previous image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? roboImages.length - 1 : currentIndex - 1;
    modalImg.src = roboImages[currentIndex];
});
  
// Navigate to the next image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === roboImages.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = roboImages[currentIndex];
});
  
// Close the modal when clicking outside the modal content
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

