document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.vis-hiden__button');
    const content = document.querySelector('.swipper');
    const fullHeight = 360;
    const hiddenHeight = 176;
  
    toggleButton.addEventListener('click', function() {
        if (content.style.maxHeight === `${hiddenHeight}px` || content.style.maxHeight === '') {
            content.style.maxHeight = `${fullHeight}px`;
            toggleButton.textContent = 'Скрыть';
        } else {
            content.style.maxHeight = `${hiddenHeight}px`;
            toggleButton.textContent = 'Показать еще';
        }
        toggleButton.classList.toggle('active');
    });
  });