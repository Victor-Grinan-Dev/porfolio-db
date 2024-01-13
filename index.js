const express = require("express");

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// app.use("/", (req, res) => {
//   res.send("server running");
// });
app.get("/", (req, res) => {
  res.json("server running");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
