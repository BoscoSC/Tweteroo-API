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

app.post("/tweets", (req, res) => {});

app.get("/tweets", (req, res) => {});

app.listen(PORT, () => console.log(`Running in port: ${PORT}`));
