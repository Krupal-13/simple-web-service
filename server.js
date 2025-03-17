const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Node.js Web Service!" });
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
