function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = '';
    errorDiv.classList.add('d-none');

    if (name.length < 4) {
        errorDiv.textContent = "يجب أن يكون الاسم 4 أحرف على الأقل.";
        errorDiv.classList.remove('d-none'); 
        return;
    }
    if (!validateEmail(email)) {
        errorDiv.textContent = "يرجى إدخال بريد إلكتروني صالح.";
        errorDiv.classList.remove('d-none');
        return;
    }
    if (password.length < 5) {
        errorDiv.textContent = "يجب أن تكون كلمة المرور 5 أحرف على الأقل.";
        errorDiv.classList.remove('d-none'); 
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            errorDiv.textContent = "فشل التسجيل. يرجى المحاولة مرة أخرى.";
            errorDiv.classList.remove('d-none'); 
            return Promise.reject();
        }
    })
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'search.html';
    })
    .catch(err => {
        console.error(err);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}