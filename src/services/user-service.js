const { UserRepository } = require("../repository/index");

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const password = String(data.password);
            if (password.length < 8 || password.length > 12) {
                throw "Password length can be in between 8-12 inclusive. Please enter valid password.";
            }

            const user = this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in create in User Repository");
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const result = this.userRepository.deleteUser(userId);
            return result;
        } catch (error) {
            console.log("Something went wrong in delete in User Repository");
            throw error;
        }
    }

    async getUser(userId) {
        try {
            const user = this.userRepository.getUser(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in get in User Repository");
            throw error;
        }
    }

    async getAllUsers(data) {
        try {
            const users = this.userRepository.getAllUser(data);
            return users;
        } catch (error) {
            console.log("Something went wrong in getAll in User Repository");
            throw error;
        }
    }

    async updateUser(userId, data) {
        try {
            const result = this.userRepository.updateUser(userId, data);
            return result;
        } catch (error) {
            console.log("Something went wrong in update in User Repository");
            throw error;
        }
    }
}

module.exports = UserService;