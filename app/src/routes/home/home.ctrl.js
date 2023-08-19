const users = {
    id: ["shinkwonho","wjddnr","sangjiyoun"],
    password: ["1234","4321","1111"],
};

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
        const id = req.body.id;
        const password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        })
    },
}



module.exports = {
    output,
    process
};