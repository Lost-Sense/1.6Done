document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.read-more__button');
    const content = document.querySelector('.text-hide');
  
    function getScreenWidth() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    function calculateVisibleLines() {
      const screenWidth = getScreenWidth();
      if (screenWidth < 320) {
        return 0; 
      } else if (screenWidth < 480) {
        return 2; 
      } else {
        return 3; 
      }
    }
  

    function toggleTextVisibility() {
      const screenWidth = getScreenWidth();
      if (screenWidth < 768) {
        content.style.display = 'none'; 
      } else {
        content.style.display = ''; 
        content.style.webkitLineClamp = `${calculateVisibleLines()}`; 
      }
    }
  
    let visibleLines = calculateVisibleLines();
  
    toggleButton.addEventListener('click', function() {
      if (getScreenWidth() < 768) {
        if (content.style.display === 'none') {
          content.style.display = ''; 
          toggleButton.textContent = 'Скрыть';
        } else {
          content.style.display = 'none'; 
          toggleButton.textContent = 'Читать далее';
        }
      } else {
        if (content.style.webkitLineClamp === `${visibleLines}` || content.style.webkitLineClamp === '') {
          content.style.webkitLineClamp = '10'; 
          toggleButton.textContent = 'Скрыть';
        } else {
          content.style.webkitLineClamp = `${visibleLines}`;
          toggleButton.textContent = 'Читать далее';
        }
      }
      toggleButton.classList.toggle('active');
    });
  
    window.addEventListener('resize', function() {
      visibleLines = calculateVisibleLines();
      toggleTextVisibility();
    });
  
    toggleTextVisibility();
  });