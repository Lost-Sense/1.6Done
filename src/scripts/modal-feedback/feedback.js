const openModalFeedBackBtns = document.querySelectorAll('.feedback-btn-opn');
const closeModalFeedBackBtns = document.querySelectorAll('.modal-feedback__close-button');
const modalFeedBack = document.querySelector('.modal-feedback');
const overL = document.querySelector('.overlay');

document.addEventListener('DOMContentLoaded', () => {

  
    if (openModalFeedBackBtns.length > 0 && modalFeedBack && closeModalFeedBackBtns.length > 0) {
      openModalFeedBackBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          modalFeedBack.classList.add('feedback-open');
          modalFeedBack.classList.remove('modal-feedback');
          overL.classList.add('over-opn');
        });
      });
  
      closeModalFeedBackBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          modalFeedBack.classList.remove('feedback-open');
          modalFeedBack.classList.add('modal-feedback');
          overL.classList.remove('over-opn');
        });
      });
    } else {
      console.error('Один из элементов не найден. Проверьте селекторы.');
    }
    document.addEventListener('click', (event) => {
      if (!modalFeedBack.contains(event.target) && !Array.from(openModalFeedBackBtns).some((btn) => btn.contains(event.target))) {
        modalFeedBack.classList.remove('feedback-open');
        modalFeedBack.classList.add('modal-feedback');
        overL.classList.remove('over-opn');
      }
    });
  });