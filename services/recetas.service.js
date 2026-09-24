import { readFile, writeFile } from "fs/promises"
import { ObjectId } from "mongodb"
import { MongoClient } from "mongodb"

const MONGO_URI="mongodb+srv://admin:admin@proyecto.kfoyaye.mongodb.net/?appName=proyecto"

const client = new MongoClient(MONGO_URI) //Nos conectamos al cluster
const db = client.db("AH20232CP1")            //Nos conectamos a la DB

export async function getRecetas(filtros = {}) {
    const filter = { eliminado: { $ne: true } }
    const page = parseInt(filtros?.page || 1)
    const limit = parseInt(filtros?.limit || 12)
    const skip = (page - 1) * limit

    // Filtro por pais
    if(filtros.country) filter.country = filtros.country

    if(filtros.type) filter.type = filtros.type

    if(filtros.difficulty) filter.difficulty = filtros.difficulty

    const sortBy = filtros.sort_by || "name"
    const sortOrder = filtros.sort_order == "asc" ? -1 : 1
    const sortOptions = { [sortBy]: sortOrder }


    // Busqueda por nombre
    if(filtros.plato) filter.name = { $regex: filtros.plato, $options: 'i' }

    const collection = db.collection("platos")

    const total = await collection.countDocuments(filter)

    const platos = await collection
        .find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .toArray()

    return {
        platos,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
    }
}

export function urlFiltro(filtros, nombre, valor) {
    const params = new URLSearchParams(filtros)
    params.set(nombre, valor)
    return `/recetas?${params.toString()}`
}

export async function getRecetasById(id) {
    const plato = await db.collection("platos").findOne( {_id: new ObjectId(id)} )
    return plato
}

export async function guardarReceta(receta) {
    await db.collection("platos").insertOne(receta)
    return receta
}

export async function reemplazarReceta(receta, id) {
    if (typeof receta.tags === "string") {
        receta.tags = receta.tags
            .split(",")
            .map(tag => tag.trim())
    }
    await db.collection("platos").updateOne(
        { _id: new ObjectId(id) },
        { $set: receta }
    )
    const recetaActualizada = await getRecetasById(id)
    return recetaActualizada
}

export async function actualizarReceta(receta, id) {
    await db.collection("platos").updateOne(
        {_id: new ObjectId(id)},
        { $set: receta }
    )
    return receta
}

export async function eliminarReceta(id){
    const plato = await getRecetasById(id)
    await db.collection("platos").deleteOne(
        {_id: new ObjectId(id)},
    )
    return plato
}