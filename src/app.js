import express from "express"
import "dotenv/config"
import rootRouter from "./routes/root.js"
import { joinPath } from "../utils/path.js"
import newItemRouter from "./routes/newItem.js"

const app = express()
app.set("view engine", "ejs")
app.set("views", joinPath("views"))

app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.json()); // for JSON requests


app.use("/", rootRouter)
app.use("/newItem", newItemRouter)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`The express is running on port ${port}`);
});

server.onerror = (err) => {
  console.error(err);
};
