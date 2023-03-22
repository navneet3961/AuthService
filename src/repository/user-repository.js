const { User, Role } = require("../models/index");

class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in create in User Repository");
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const result = await User.destroy(userId);
            return result;
        } catch (error) {
            console.log("Something went wrong in delete in User Repository");
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in get in User Repository");
            throw error;
        }
    }

    async getUserByEmail(userEmail) {
        try {
            const user = await User.findOne({
                attributes: ['password', 'id'],
                where: {
                    email: userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in get in User Repository");
            throw error;
        }
    }

    async getAllUsers(data) {
        try {
            const users = await User.findAll({
                attributes: ['email', 'id']
            }, {
                where: data
            });
            return users;
        } catch (error) {
            console.log("Something went wrong in getAll in User Repository");
            throw error;
        }
    }

    async updateUser(userId, data) {
        try {
            const result = await User.update(data, {
                where: {
                    id: userId
                }
            });

            return result;
        } catch (error) {
            console.log("Something went wrong in update in User Repository");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const admin = await Role.findOne({
                where: {
                    name: 'Admin'
                }
            });

            return user.hasRole(admin);
        } catch (error) {
            console.log("Something went wrong in isAdmin() in User Repository");
            throw error;
        }
    }
}

module.exports = UserRepository;