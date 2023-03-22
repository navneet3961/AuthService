const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");
const { PORT } = require('./config/serverConfig');

// const UserRepository = require("./repository/index");
// const user = new UserRepository();
// const { UserService } = require("./services/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server has started at ${PORT}`);

        // const user = new UserService();
        // const token = user.generateToken({ email: 'navneet@gmail.com', id: 1 });
        // console.log(token);

        // console.log(user.verifyToken(token));
    });
}

setupAndStartServer();