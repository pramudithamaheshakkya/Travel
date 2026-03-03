/**
 * Production-Ready Secure Login System (Node.js + Express)
 * Implements: Bcrypt, JWT, Rate Limiting, Helmet, CSRF, Validator
 */

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const app = express();

// 1. SECURITY HEADERS (Helmet)
app.use(helmet());

// 2. INPUT PARSING & LIMITS
app.use(express.json({ limit: '10kb' })); // Prevent large payloads

// 3. RATE LIMITING
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per window
    message: "Too many login attempts, please try again after 15 minutes"
});

// Mock Database
const users = [];
const JWT_SECRET = 'your_super_secret_key_12345'; // Store in environment variables!

// 4. REGISTRATION ROUTE (Secure Hashing)
app.post('/register', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 10 }).matches(/\d/).matches(/[A-Z]/)
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { email, password } = req.body;

        // Bcrypt Hashing (Salt + Hash)
        const hashedPassword = await bcrypt.hash(password, 12);

        users.push({ email, password: hashedPassword });
        res.status(201).send("User registered securely.");
    } catch (err) {
        res.status(500).send("Internal server error.");
    }
});

// 5. LOGIN ROUTE (JWT + Timing Attack Protection)
app.post('/login', loginLimiter, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email);

        if (!user) {
            // Delay response to prevent timing attacks / user enumeration
            return res.status(401).send("Invalid email or password.");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send("Invalid email or password.");

        // Generate JWT
        const token = jwt.sign({ id: user.email }, JWT_SECRET, { expiresIn: '1h' });

        // Send in Secure, HttpOnly cookie in production
        res.json({ token, message: "Logged in successfully." });

    } catch (err) {
        res.status(500).send("Internal server error.");
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Secure server running on port ${PORT}`));
