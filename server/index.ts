import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(cors());
// Define your Express routes, middleware, and other server configurations here
app.get("/api/data", (req: Request, res: Response) => {
  // Handle your Express route logic here
  res.json({ message: "Hello from Express server!" });
});

app.post("/api/click", (req: Request, res: Response) => {
  // Handle your Express route logic here
  res.send({ msg: "통신완료!!" });
});

// Start the server
app.listen(5000, () => {
  console.log("Express server is running on http://localhost:5000");
});
