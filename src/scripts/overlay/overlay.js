document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.aside');
    const openSidebarBtn = document.querySelector('.opn-aside-btn');
    const closeSidebarBtn = document.querySelector('.exit-button');
    const overlay = document.querySelector('.overlay');
  
    if (openSidebarBtn && sidebar && closeSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => {
            sidebar.classList.add('-open');
            overlay.classList.add('overlay-open');
        });
  
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('-open');
            overlay.classList.remove('overlay-open');
        });
    } else {
        console.error('Один из элементов не найден. Проверьте селекторы.');
    }
    document.addEventListener('click', (event) => {
      if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
          sidebar.classList.remove('-open');
          overlay.classList.remove('overlay-open');
      }
  });
  });