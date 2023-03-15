const expandBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
expandBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('sidebar-toggle');
})