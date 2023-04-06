import express, { Request, Response } from "express";

const app = express();

// Define your Express routes, middleware, and other server configurations here
app.get("/api/data", (req: Request, res: Response) => {
  // Handle your Express route logic here
  res.json({ message: "Hello from Express server!" });
});

// Start the server
app.listen(5000, () => {
  console.log("Express server is running on http://localhost:5000");
});
