import express from "express";

const app = express();

const users = ["bdthomson"];

app.get("/api/users", (req, res) => {
  res.send({ users });
});

export default app;
