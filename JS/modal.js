// Get the modal element
const modal = document.querySelector('.modal');

// Get the close button element
const closeButton = document.querySelector('.modal-okay');

// Function to open the modal
function openModal() {
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener for the close button
closeButton.addEventListener('click', closeModal);

// Event listener for the window object to close the modal when user clicks outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});