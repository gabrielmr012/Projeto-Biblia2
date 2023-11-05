const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('wrapper.wrapper.active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.remove('wrapper.active');
});