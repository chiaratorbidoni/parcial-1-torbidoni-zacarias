import * as chefService from "../../services/chefs.service.js"

export async function getChefs(req, res) {
    try {
        const chefs = await chefService.getChefs(req.query)
        res.status(200).json(chefs)
    } catch (error) {
        res.status(500).json({ message: "No se pudo encontrar a los Chefs" })
    }
}

export async function saveChef(req, res) {
    try {
        const chef = await chefService.saveChef(req.body)
        res.status(201).json(chef)
    } catch (error) {
        res.status(500).json({ message: "Error al añadir al Chef" })
    }
}