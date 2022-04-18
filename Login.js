const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "abhinav" && password === "password") {
        alert("You have successfully logged in.");
        window.location.replace("Portfolio.html");
    } else {
        alert("Incorrect username or password");
    }
})