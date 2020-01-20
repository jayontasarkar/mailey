require("dotenv").config();
const express = require("express");
const app = express();

// initialize cookie session
require("./services/cookieSession")(app);

// initialize passport
require("./services/passport")(app);

// db connection
require("./services/db")();

// auth routes
require("./routes/index")(app);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.info(`Listening on port ${port}`));

