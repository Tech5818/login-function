const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const login = () => {
    const req = {
        id : id.value,
        password : password.value
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // 또는 "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json()
    .then((res) => {}));
}    

loginBtn.addEventListener("click", login);
 
