import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Home page",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
