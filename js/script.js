// script.js
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        // Если логин и пароль совпадают, перенаправляем пользователя на другую страницу
        window.location.href = '../main/main.html'; // Замените на адрес вашей страницы
    } else {
        // Выводим сообщение об ошибке или делаем другие действия
        alert('Неверный логин или пароль');
    }
}
