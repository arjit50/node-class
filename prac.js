const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// Dummy user (normally from DB)
const user = {
    id: 1,
    username: "arjit",
    password: "$2a$10$7VIgXPnYBc8FyH0wkU8hL.9ZBq0oqE7FYtE7DSF5HRtUTlRBFCDgu" // "arjit123"
};

// Secret key for JWT
const JWT_SECRET = "MY_SECRET_KEY_123";

// ---------------------- LOGIN ROUTE ----------------------
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Check username
    if (username !== user.username) {
        return res.status(401).json({ message: "Invalid username" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }

    // Create token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: "1h",
    });

    res.json({ message: "Login Successful", token });
});

// ---------------------- MIDDLEWARE ----------------------
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: "Token not provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid Token" });

        req.user = decoded; // store decoded user data
        next();
    });
}

// ---------------------- PROTECTED ROUTE ----------------------
app.get("/dashboard", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to Dashboard!",
        user: req.user,
    });
});

// ---------------------- START SERVER ----------------------
app.listen(5000, () => console.log("Server running on port 5000"));
