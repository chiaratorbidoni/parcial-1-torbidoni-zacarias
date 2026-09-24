import * as recetaApiController from "../controllers/recetas.api.controller.js"
import { Router } from "express"

const router = Router()

router.get("/api/recetas", recetaApiController.getReceta)
router.get("/api/recetas/:id", recetaApiController.getRecetaById)
router.post("/api/recetas", recetaApiController.saveReceta)
router.delete("/api/recetas/:id", recetaApiController.deleteReceta)
router.put("/api/recetas/:id", recetaApiController.replaceReceta)
router.patch("/api/recetas/:id", recetaApiController.updateReceta)

export default router