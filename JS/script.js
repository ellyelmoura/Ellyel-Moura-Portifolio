const buttonShowProjects = document.getElementById('btn-read-more');
const showProjects = document.querySelector('.projects-breve');

const navList = document.getElementById('navList');
const btnMenu = document.getElementById('btn-menu');

const email = document.getElementById('email');



buttonShowProjects.addEventListener('click', () => {
    showProjects.classList.toggle('active-projects');

    if (showProjects.classList.contains('active-projects')) {
        return buttonShowProjects.textContent = 'Ver Menos';
    }

    buttonShowProjects.textContent = 'Ver Mais';
});


btnMenu.addEventListener('click', () => {
    navList.classList.toggle('active')
});

email.addEventListener('mouseover', () => {
    email.textContent = "ellyel.dev@gmail.com"
});

email.addEventListener('mouseout', () => {
    email.textContent = "Email"
});











