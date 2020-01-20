const cookieSession = require("cookie-session");

module.exports = app => {
    app.use(cookieSession({
        name: 'mailey-session',
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    }));
};