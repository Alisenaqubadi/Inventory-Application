import { Router } from "express";
const rootRouter = Router()
import rootControllers from "../controllers/rootControllers.js";
import newItemRouter from "./newItem.js";

rootRouter.get('/', rootControllers.getRoot)

export  default rootRouter
