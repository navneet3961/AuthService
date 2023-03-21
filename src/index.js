const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");
const { PORT } = require('./config/serverConfig');

// const UserRepository = require("./repository/user-repository");
// const user = new UserRepository();

const setupAndStartServer = async () => {
    const app = express();

    // const found = await user.getAllUsers();
    // console.log(found);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server has started at ${PORT}`);
    });
}

setupAndStartServer();