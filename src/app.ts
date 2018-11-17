import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.send({ message: "API" });
});

export default app;
