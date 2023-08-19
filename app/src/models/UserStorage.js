class UserStorage {
    static #users = {
        id: ["shinkwonho","wjddnr","sangjiyoun"],
        password: ["1234","4321","1111"],
        name: ["권호","정욱","지상"]
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers
        }, {})
        return newUsers;
    }
}

module.exports = UserStorage;