document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-aside');
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');
    const rodapeProjeto = document.querySelector('.rodape _projeto');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');

        navbar.classList.toggle('move-right');
        mainContent.classList.toggle('move-right');
        rodapeProjeto.classList.toggle('move-right');

        if (sidebar.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });
});