function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = ''; 
    errorDiv.classList.add('d-none');

    fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/home')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'search.html';
            } else {
                errorDiv.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
                errorDiv.classList.remove('d-none'); 
            }
        })
        .catch(err => {
            console.error(err);
        });
}