const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const login = () => {
    const req = {
        id : id.value,
        password : password.value
    };
    console.log(req)
}

loginBtn.addEventListener("click", login);
 
