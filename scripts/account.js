let loginList = JSON.parse(localStorage.getItem('loginList')) || [];

function toggleForm(form) {
    document.getElementById('signup').classList.remove('active');
    document.getElementById('login').classList.remove('active');
    document.getElementById(form).classList.add('active');
}

function handleSignUp() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        const user = { username, email, password };

        loginList.push(user);
        localStorage.setItem('loginList', JSON.stringify(loginList));

        alert(`Roʻyxatdan oʻtdingiz!\nFoydalanuvchi nomi: ${username}\nEmail: ${email}`);
        toggleForm('login');
    } else {
        alert("Ma'lumotlarni to'liq kiriting");
    }
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        const user = loginList.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            const accountLabel = document.querySelector('.account__button__label');
            if (accountLabel) {
                accountLabel.textContent = user.username;
            }

            window.location.href = './index.html';
        } else {
            alert("Foydalanuvchi topilmadi yoki parol noto'g'ri");
        }
    } else {
        alert("Ma'lumotlarni to'liq kiriting");
    }
}

window.onload = function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const accountLabel = document.querySelector('.account__button__label');
        if (accountLabel) {
            accountLabel.textContent = loggedInUser.username;
        }
    }
};
