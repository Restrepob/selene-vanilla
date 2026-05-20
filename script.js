

const modal = document.getElementById("myModal");
const toggleModalBtn = document.querySelector(".toggle-modal");
const closeModalBtn = document.querySelector(".close-modal");
let courses = [];

async function loadCourses() {
  try {
    const response = await fetch("./materias.json");
    if (!response.ok) {
      throw new Error("No se pudo cargar materias.json");
    }
    courses = await response.json();
    console.log("correcto");
  } catch (error) {
    console.error(error);
  }
}

loadCourses();

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