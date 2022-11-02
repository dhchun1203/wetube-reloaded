import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.timestamp}`);
  next(); // middleware
};

const handleHome = (req, res, next) => {
  console.log("This is end!");
  return res.send("I love Middleware"); // finalware
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} ❤️`);

app.listen(PORT, handleListening);
