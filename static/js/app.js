document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".image-gallery img");


  const modalImage = document.createElement("img");
  modalImage.classList.add("modal-image");
  modal.prepend(modalImage);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalMessage.textContent = image.getAttribute("data-message");
      modalImage.src = image.src; 
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
