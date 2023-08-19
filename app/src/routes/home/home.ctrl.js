const User = require("../../models/User");

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const user = new User(req,body);
        const response = user.login();
        return res.json(response);
        // const id = req.body.id;
        // const password = req.body.password;

        // const users = UserStorage.getUsers("id", "password")
        
        // const response = {};
        
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);

        //     if (users.password[idx] === password) {
        //         response.success = true;
        //         return res.json(response)
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다."
        // return res.json(response)
    },
}



module.exports = {
    output,
    process
};