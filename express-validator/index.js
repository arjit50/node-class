const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const registerValidation = [
    body('email')
        .isEmail().withMessage('Enter a valid email'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

app.post('/register', registerValidation, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(`<h1>${JSON.stringify(errors.array())}</h1>`)
        // return res.status(400).json({ errors: errors.array() });
    }

    
    const userData = {
        email: req.body.email,
        password: req.body.password
    };


    res.send(`
        <h2>User Registered Successfully!</h2>
        <p>Email: ${userData.email}</p>
        <p>Password: ${userData.password}</p>
    `);
});

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/register">
            <input type="email" name="email" placeholder="Enter your email" required>
            <input type="password" name="password" placeholder="Enter your password" required>
            <button type="submit">submit</button>
        </form>
    `);
});

app.listen(5000, () => console.log('Server running on port 5000'));
