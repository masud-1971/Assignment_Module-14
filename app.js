import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import {rateLimit} from "express-rate-limit";
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import router from "./routes/api.js";
import {
    PORT,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
} from "./config/config.js";

const app = express();
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
});
app.use(helmet());
app.use(hpp());
app.use(limiter);
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




