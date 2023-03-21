const { User } = require("../models/index");

class UserRepository {
    async createUser(data) {
        try {
            const user = User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in create in User Repository");
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const result = User.destroy(userId);
            return result;
        } catch (error) {
            console.log("Something went wrong in delete in User Repository");
            throw error;
        }
    }

    async getUser(userId) {
        try {
            const user = User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in get in User Repository");
            throw error;
        }
    }

    async getAllUsers(data) {
        try {
            const user = User.findAll({
                attributes: ['email', 'id']
            }, {
                where: data
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in getAll in User Repository");
            throw error;
        }
    }

    async updateUser(userId, data) {
        try {
            const result = User.update(data, {
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
}

module.exports = UserRepository;