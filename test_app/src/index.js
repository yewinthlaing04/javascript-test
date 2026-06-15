import express from "express";
import { add } from "./stringCalculator.js";

const app = express();

app.use(express.json());

app.post("/add", (req, res) => {
  try {
    const { numbers } = req.body;

    const result = add(numbers);

    res.json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
