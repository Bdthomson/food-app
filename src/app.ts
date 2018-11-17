import express from "express";

const app = express();

const users = [
  {
    name: "bdthomson"
  }
];

app.get("/api/users", (req, res) => {
  res.send({ users });
});

export default app;
