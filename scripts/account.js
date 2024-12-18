
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
        alert(`Kirish muvaffaqiyatli amalga oshirildi!\nEmail: ${email}`);
    } else {
        alert("Ma'lumotlarni to'liq kiriting");
    }
}

let backBtn = document.getElementById('back-btn')

backBtn.addEventListener('click', () => {
    window.open('./index.html')
    window.close()
})
