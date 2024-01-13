const express = require("express");
const serverless = require("serverless-http");

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);

// // app.use("/", (req, res) => {
// //   res.send("server running");
// // });

// app.get("/", (req, res) => {
//   res.json("server running");
// });

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
