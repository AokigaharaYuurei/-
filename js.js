document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', function() {
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
      }
    });
    const factsElement = document.querySelector('.facts');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Срабатывает, когда 10% элемента видно
    });
    
    observer.observe(factsElement);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    }, {
        threshold: 0.1 // Срабатывает, когда 10% элемента видно
    });
    
    observer.observe(section);
});

  
  