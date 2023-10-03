 const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function() {
        
        alert('Кнопка была нажата!'); 
    });
     document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

           
            if (username.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
                alert('Пожалуйста, заполните все поля');
                return;
            }

           
            if (password.value !== confirmPassword.value) {
                alert('Пароли не совпадают');
                return;
            }

           
            alert('Форма отправлена на сервер.');
            form.reset(); 
        });
    });