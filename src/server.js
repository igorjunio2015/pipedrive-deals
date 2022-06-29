require("./utils/logger.config");
const logger = require("npmlog");
const Express = require("express");
const app = Express();

const pipedriveRoute = require("./routes/pipedrive.route");

app.use(Express.json());

/**
 * @ROUTES
 */

app.use(pipedriveRoute);

/**
 * @MIDDLEWARES
 */

app.all("*", async (req, res) => {
    return res.status(405).json({ error: true, message: "Route not defined" });
})

var portApp = process.env.PORT || 8080;

app.listen(portApp, () => {
    logger.info("SERVER", "Service is online");
})