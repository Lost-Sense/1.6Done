document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.tech-types-vis-hiden__button');
  const content = document.querySelector('.tech-types-swipper__content');
  const fullHeight = 400;
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