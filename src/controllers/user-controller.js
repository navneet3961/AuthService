const { UserService } = require("../services/index");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const user = await userService.createUser({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: user,
            success: true,
            message: 'Successfully created a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not created a user',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not deleted a user',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json({
            data: user,
            success: true,
            message: 'Successfully updated a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not updated a user',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return res.status(200).json({
            data: user,
            success: true,
            message: 'Successfully got a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got a user',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const users = await userService.getAllUsers(req.query);
        return res.status(200).json({
            data: users,
            success: true,
            message: 'Successfully got all users',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not got any user',
            err: error
        });
    }
}

const signIn = async (req, res) => {
    try {
        console.log(req.body.email);
        console.log(req.body.password);

        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully signed in',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to login',
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'User is authenticated and token is valid',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not an authenticated token',
            err: error
        });
    }
}

module.exports =
{
    create,
    destroy,
    update,
    get,
    getAll,
    signIn,
    isAuthenticated
}