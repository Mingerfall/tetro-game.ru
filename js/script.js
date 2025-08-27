// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Функция для открытия/закрытия меню
    function toggleMenu() {
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    // Обработчик клика по бургер-меню
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Закрываем меню при клике на затемнение фона
    navOverlay.addEventListener('click', function() {
        toggleMenu();
    });
    
    // Закрываем меню при клике на ссылку в мобильном меню
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // Закрываем меню при нажатии Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Закрываем меню при изменении размера окна (на случай поворота устройства)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});