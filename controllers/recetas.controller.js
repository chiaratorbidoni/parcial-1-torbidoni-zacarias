import * as recetaService from "../services/recetas.service.js"
import * as recetaView from "../views/receta.view.js"

export async function getRecetas(req, res) {
    const resultado = await recetaService.getRecetas(req.query)
    res.send(recetaView.listaRecetas(resultado.platos,req.query,resultado))
}

export async function getRecetasById(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.getRecetasById(id)
        res.send(recetaView.recetaDetail(receta))
    } catch (error) {
        res.send(error)
    }
}

export function nuevaReceta(req, res) {
    try {
        res.send(recetaView.nuevaReceta())
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export async function guardarReceta(req, res) {
    try {
        const receta = req.body
        if (typeof receta.tags === "string") {
            receta.tags = receta.tags
                .split(",")
                .map(tag => tag.trim())
        }
        await recetaService.guardarReceta(receta)
        res.redirect("/recetas")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export async function getEditarReceta(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.getRecetasById(id)
        res.send(recetaView.editarReceta(receta))
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export async function editarReceta(req, res) {
    try {
        const id = req.params.id
        const receta = await recetaService.reemplazarReceta(req.body, id)
        res.send(recetaView.recetaDetail(receta))
    } catch (error) {
        res.send(error)
    }
}

export async function getEliminarReceta(req, res) {

    try {

        const id = req.params.id
        const receta = await recetaService.getRecetasById(id)
        res.send(recetaView.eliminarReceta(receta))
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export async function eliminarReceta(req, res) {
    try {
        const id = req.params.id
        await recetaService.eliminarReceta(id)
        res.redirect("/recetas")
    } catch (error) {
        res.send(error)
    }
}