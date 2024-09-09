const modalCallBack = document.querySelector('.modal-callback');
const openModalCallBackBtns = document.querySelectorAll('.callback-btn-opn');
const closeModalCallBackBtns = document.querySelectorAll('.modal-callback__close-button');
const overLays = document.querySelector('.overlay-callback');

document.addEventListener('DOMContentLoaded', () => {

  
    if (openModalCallBackBtns.length > 0 && modalCallBack && closeModalCallBackBtns.length > 0) {
      openModalCallBackBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          modalCallBack.classList.add('callback-open');
          modalCallBack.classList.remove('modal-callback');
          overLays.classList.add('over-opn');
        });
      });
  
      closeModalCallBackBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          modalCallBack.classList.remove('callback-open');
          modalCallBack.classList.add('modal-callback');
          overLays.classList.remove('over-opn');
        });
      });
    } else {
      console.error('Один из элементов не найден. Проверьте селекторы.');
    }
    document.addEventListener('click', (event) => {
      if (!modalCallBack.contains(event.target) && !Array.from(openModalCallBackBtns).some((btn) => btn.contains(event.target))) {
        modalCallBack.classList.remove('callback-open');
        modalCallBack.classList.add('modal-callback');
        overLays.classList.remove('over-opn');
      }
    });
  });