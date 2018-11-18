import express from "express";
import path from "path";
import app from "./app";

const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;

if (environment === "production") {
  console.log("Production build enabled. Serving client code.");
  app.use(express.static("client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(port, () => {
  console.log(`Listening on port ${port} in ${environment} environment`);
});

// Handle CTRL+C
process.on("SIGINT", shutdown);

function shutdown() {
  console.log("Shutting down express");
  server.close(() => console.log("Shut down express"));
}
