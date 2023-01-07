import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const users = [];
const messages = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send("Informações faltando");
  }

  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (!username || !tweet) {
    return res.status(400).send("Informações faltando");
  }

  const userExist = users.find((user) => user.username === username);

  if (!userExist) {
    return res.status(401).send("UNAUTHORIZED");
  }

  messages.push(req.body);

  res.status(201).send("OK");
});

// app.get("/tweets", (req, res) => {});

app.listen(PORT, () => console.log(`Running in port: ${PORT}`));
