import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use("./client", clientRoutes);
app.use("./sales", salesRoutes);
app.use("./general", generalRoutes);
app.use("./management", managementRoutes);

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("server started")))
  .catch((err) => console.log(err));
