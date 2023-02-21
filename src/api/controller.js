require('dotenv').config();
const users = require('./repository/users');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function verifyJWT() {
    const token = localStorage.getItem('token');

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return false;

        return decoded.id;
    });
}

async function login(username, password) {
    const data = await users.login(username, password);
    if (data.length == 1) {
        console.log('Login sucess!');
        const token = jwt.sign({ id: data[0].id }, SECRET, { expiresIn: "7d" });
        localStorage.setItem('token', token);
        return { auth: true, token: token };
    } else {
        console.log('Login error!');
        return { auth: false, token: null };
    }
}
