const modal = document.getElementById("myModal");
const toggleModalBtn = document.querySelector(".toggle-modal");
const closeModalBtn = document.querySelector(".close-modal");

function toggleModal() {
  if (!modal) return;
  modal.classList.toggle("modal-off");
}

toggleModalBtn?.addEventListener("click", toggleModal);
closeModalBtn?.addEventListener("click", toggleModal);

// close modal if clicking outside the window
modal?.addEventListener("click", (event) => {
  if (event.target === modal) toggleModal();
}); 