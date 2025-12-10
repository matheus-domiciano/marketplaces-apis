import "express-async-errors";
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import dotenv from 'dotenv';
import routes from './routes'
import errorHandler  from './middlewares/error.middleware';

dotenv.config();

const app = express();

app.use(morgan("tiny"))
app.use(helmet());
app.use(express.json());

// Healthcheck
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// Rotas versão v1
app.use("/api/v1", routes);

app.use(errorHandler);

export default app;