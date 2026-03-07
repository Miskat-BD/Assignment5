// console.log("Connected");
document.getElementById('login-btn').addEventListener('click', () => {
    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value;
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    if (username === "admin" && password === "admin123") {

        window.location.assign("index.home.html")
    }
    else {
        alert("Invalid username or password");
        return;
    }
    // console.log(username, password)
})

