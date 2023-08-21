/** Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration*/
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to athlete rest api");
});

// User Routes Loading

const userRoutes = require("./routes/user.routes");
userRoutes(app);

const tkFn = require("./middleware/verifyToken")
app.use(tkFn)


const athleteRoutes = require("./routes/athlete.routes");
athleteRoutes(app);


app.listen(port, () => {
    console.log("Server is running...")
});

