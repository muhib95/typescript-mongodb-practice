import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// cors use here
app.use(cors());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Wc!");
});
export default app;
