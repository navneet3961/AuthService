const { UserRepository } = require("../repository/index");
const { bcrypt } = require("bcrypt");
const { JWT_KEY } = require('../config/serverConfig');
const jwt = require("jsonwebtoken");

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

    async getUserById(userId) {
        try {
            const user = this.userRepository.getUserById(userId);
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

    generateToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
            return result;
        } catch (error) {
            console.log("Some issue occur while generating a token");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Some issue occur while verifying a token");
            throw error;
        }
    }

    matchPassword(enteredPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(enteredPassword, encryptedPassword);
        } catch (error) {
            console.log("Some issue occur while matching the passwords");
            throw error;
        }
    }
}

module.exports = UserService;