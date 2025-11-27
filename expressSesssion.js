const express = require("express");
const session = require("express-session");

const app = express();

// Session middleware
app.use(
  session({
    secret: "MY_SECRET_KEY",        // used to sign the session ID cookie
    resave: false,                  // don't save session if not modified
    cookie: { maxAge: 60 * 1000 } 
  })
);

app.get('/', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
    res.send("Welcome! You visited first time.");
  } else {
    req.session.views++;
    res.send(`You visited ${req.session.views} times.`);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
