//red protect dashboard route using session authentication
//red create login post route storing session data
//red restrict dashboard route(/dashboard) so only logged in user can access it and other should receive unauthorized


let express = require('express');
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SESSION MIDDLEWARE
app.use(
  session({
    secret: "MY_SECRET_KEY",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }  // 1 day
  })
);

// ----------------------------
// LOGIN PAGE (GET)
// ----------------------------
app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="username" placeholder="username" />
      <input name="password" placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  `);
});

// ----------------------------
// LOGIN ROUTE (POST)
// ----------------------------
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // simple check (normally check DB)
  if (username === "admin" && password === "1234") {

    // store session data
    req.session.user = {
      username: "admin"
    };

    return res.send("Login successful! <a href='/dashboard'>Go to dashboard</a>");
  }

  res.status(401).send("Invalid username or password");
});

// ----------------------------
// MIDDLEWARE: PROTECT ROUTE
// ----------------------------
function isAuthenticated(req, res, next) {
  if (req.session.user) return next();
  return res.status(401).send("Unauthorized! Please login first.");
}

// ----------------------------
// PROTECTED ROUTE
// ----------------------------
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`
    <h1>Welcome to Dashboard</h1>
    <p>Logged in as: ${req.session.user.username}</p>
    <a href="/logout">Logout</a>
  `);
});

// ----------------------------
// LOGOUT
// ----------------------------
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out successfully!");
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
