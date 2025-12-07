import { Router } from "express";
const newItemRouter = Router()
import newItemControllers from "../controllers/newItemControllers.js";

newItemRouter.get('/', newItemControllers.getNewItem)
newItemRouter.post('/', newItemControllers.postNewItem)

export default newItemRouter;
