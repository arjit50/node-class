const express = require('express');
const app = express();

const cookieSession = require('cookie-session');

// Middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["secret_key"],      // encryption key
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.get('/', (req, res) => {
  if (!req.session.view) {
    req.session.view = 1;
  } else {
    req.session.view++;
  }

  res.send(`Page views: ${req.session.view}`);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
