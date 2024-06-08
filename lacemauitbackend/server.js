import express from "express";
import cors from "cors";
import knex from "knex";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "1234",
        database: "postgres",
    },
});

app.post("/register", (req, res) => {
    const { nume, email, parola } = req.body;

    if (!nume || !email || !parola) {
        return res.status(400).json("Missing required fields");
    }

    db("users")
        .insert({ nume, email, parola })
        .then(() => {
            res.json("users inserted successfully, YEA");
        })
        .catch((err) => {
            console.error("Error inserting user: ", err);
            res.status(500).json("Failed to insert users, :(");
        });
});

app.get("/", (req, res) => {
    res.json("Merge getu bv");
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
