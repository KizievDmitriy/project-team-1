(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-Modal-open-header]'),
    closeModalBtn: document.querySelector('[data-Modal-close-header]'),
    modal: document.querySelector('[data-Modal-header]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
