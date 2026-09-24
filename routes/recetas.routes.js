import * as recetaController from "../controllers/recetas.controller.js"
import { Router } from "express"

const router = Router()

router.get("/recetas", recetaController.getRecetas)
router.get("/recetas/nueva",  recetaController.nuevaReceta)
router.post("/recetas/nueva",  recetaController.guardarReceta)
router.get("/recetas/editar/:id",  recetaController.getEditarReceta)
router.post("/recetas/editar/:id",  recetaController.editarReceta)
router.get("/recetas/eliminar/:id",  recetaController.getEliminarReceta)
router.post("/recetas/eliminar/:id",  recetaController.eliminarReceta)
router.get("/recetas/:id",  recetaController.getRecetasById)

export default router