import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5500;
app.use(cors());
// Define your Express routes, middleware, and other server configurations here

app.get("/", async (req, res) => {
  console.log("12342424123");
});

// Start the server
app.listen(port, () => {
  console.log("Express server is running on http://localhost:" + port);
});
