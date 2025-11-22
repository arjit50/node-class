const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();

//red use cookie-parser with secret for signed cookies
app.use(cookieParser("MY_SECRET_KEY"));

//red --------- SET COOKIE ----------
app.get('/setcookie', (req, res) => {
    res.cookie('theme', 'dark', {
        maxAge: 900000,
        httpOnly: true
    });

    res.cookie('sid', 'abc123', {
        signed: true,
        httpOnly: true
    });

    res.send("Cookies set successfully!");
});

//red --------- READ COOKIE ----------
app.get('/read', (req, res) => {
    console.log("Unsigned Cookies:", req.cookies);
    console.log("Signed Cookies:", req.signedCookies);

    res.json({
        unsigned: req.cookies,
        signed: req.signedCookies
    });
});

//red --------- DELETE COOKIE ----------
app.get('/clear', (req, res) => {
    res.clearCookie('theme');
    res.clearCookie('sid');
    res.send("Cookies cleared");
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});


//red session also