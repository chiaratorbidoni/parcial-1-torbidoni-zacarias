import * as chefApiController from "../controllers/chefs.api.controller.js"
import { Router } from "express"

const router = Router()

router.get("/api/chefs", chefApiController.getChefs)
router.post("/api/chefs", chefApiController.saveChef)

export default router