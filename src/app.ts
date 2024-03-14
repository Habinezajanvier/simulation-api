import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Welcome to my apis" });
});

export default app;
