import * as recetaService from "../../services/recetas.service.js"

export async function getReceta(req, res) {
    try {
        const recetas = await recetaService.getRecetas(req.query)
        res.status(200).json(recetas)
    } catch (error) {
        res.status(500).json({ message: "Error al buscar las recetas" })
    }
}

export async function getRecetaById(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.getRecetasById(id)
        if (receta) res.status(200).json(receta)
        else res.status(404).json({ message: "Receta no encontrada" })
    } catch (error) {
        res.json({ message: "Error al obtener la receta" })
    }
}

export async function saveReceta(req, res) {
    try {
        const receta = await recetaService.guardarReceta(req.body)
        res.status(201).json(receta)
    } catch (error) {
        res.status(500).json({ message: "Error al añadir la receta" })
    }
}

export async function deleteReceta(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.eliminarReceta(id)
        if (receta) res.status(202).json(receta)
        else res.status(404).json({ message: "Receta no encontrada" })
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la receta" })
    }
}

export async function replaceReceta(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.reemplazarReceta(req.body, id)
        if (receta) res.status(202).json(receta)
        else res.status(404).json({ message: "Receta no encontrada" })
    } catch (error) {
        res.status(500).json({ message: "Error al reemplazar la receta" })
    }
}

export async function updateReceta(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.actualizarReceta(req.body, id)
        if (receta) res.status(202).json(receta)
        else res.status(404).json({ message: "Receta no encontrada" })
    } catch (error) {
        res.status(500).json({ message: "Error al reemplazar la receta" })
    }
}