const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        isActive: true,
        preferences: {
            theme: "light",
            language: "en",
        },
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        isActive: false,
        preferences: {
            theme: "dark",
            language: "es",
        },
    },
    {
        id: 3,
        name: "Chen Wei",
        email: "chen.wei@example.com",
        isActive: true,
        preferences: {
            theme: "light",
            language: "zh",
        },
    },
];

// ------------------------------ HELPER FUNCTIONS -------------------------------- //

const generateId = () => {
    let maxId = 0;
    if (users.length > 0) maxId = Math.max(...users.map((user) => user.id)) + 1;
    return maxId;
};

const userAlreadyInDB = (email) => {
    const user = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    return user ? true : false;
};


const credentialsChecker = (req, res, next) => {
    const body = req.body;
    if (!body.name && !body.email)
        return res.json({ error: "Please enter your name and email." });
    else if (!body.name) return res.json({ error: "name required." });
    else if (!body.email) return res.json({ error: "email required." });
    else if (userAlreadyInDB(body.email))
        return res.json({ error: "A user with this email already exists" });
    next();
};

const loginChecker = (req, res, next) => {
    const body = req.body;
    if (!body.email && !body.password)
        return res.json({ error: "Please enter your email and password." });
    else if (!body.email) return res.json({ error: "email required." });
    else if (!body.password) return res.json({ error: "password required." });
    next();
};

// -------------------------------------------------------------------------------- //

app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) res.status(404).json({ error: "User not found" }).end();
    res.status(200).json(user);
});

app.post("/api/users/register", credentialsChecker, (req, res) => {
    const body = req.body;
    const newUser = {
        id: generateId(),
        name: body.name,
        email: body.email,
        isActive: false,
        preferences: {
            theme: "light",
            language: "en",
        },
    };
    users = users.concat(newUser);
    res.json(newUser);
});

app.post("/api/users/login", loginChecker, (req, res) => {
    res.json({message: "Success"});
});

app.use((req, res, next) => {
    res.send("Unknown endpoint");
});

const PORT = 3001;
app.listen(PORT);

console.log(`listening on port ${PORT}`);
