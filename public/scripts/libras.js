document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-aside');
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');
    const rodapeProjeto = document.querySelector('.rodape_projeto');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');

        navbar.classList.toggle('move-right');
        mainContent.classList.toggle('move-right');
        rodapeProjeto.classList.toggle('move-right');

        if (sidebar.classList.contains('active')) {
            body.classList.add('no-scroll');
            console.log('Scroll bloqueado');
        } else {
            body.classList.remove('no-scroll');
            console.log('Scroll desbloqueado');
        }
    });

    window.addEventListener('scroll', function () {
        var footer = document.getElementById('footer');
        var scrollPosition = window.scrollY + window.innerHeight;
        var pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= pageHeight - 10) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});