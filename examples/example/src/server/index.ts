import { app, express } from "sfc-server";
import cors from "cors";
app.use(express.json())
app.use(cors());
