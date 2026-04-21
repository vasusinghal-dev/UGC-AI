import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import routes from "./routes/index.js";
import clerkWebhooks from "./controllers/clerk.controller.js";

const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(clerkMiddleware({ clockSkewInMs: 100000 }));

app.use("/api/clerk", express.raw({ type: "application/json" }), clerkWebhooks);

app.use(express.json());

// All Routes
app.use("/api", routes);

export default app;
