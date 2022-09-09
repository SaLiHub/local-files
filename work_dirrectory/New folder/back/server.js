import express from "express";
import cors from "cors";
import tasks from './api/routers/tasks.route.js'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api/v1/tasks", tasks);

export default app
