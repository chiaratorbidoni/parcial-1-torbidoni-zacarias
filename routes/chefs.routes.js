import * as chefController from "../controllers/chefs.controller.js"
import { Router } from "express"

const router = Router()

router.get("/chefs", chefController.getChefs)
router.get("/chefs/nuevo",  chefController.nuevoChef)
router.post("/chefs/nuevo",  chefController.saveChef)

export default router