import { MongoClient } from "mongodb"

const MONGO_URI="mongodb+srv://admin:admin@proyecto.kfoyaye.mongodb.net/?appName=proyecto"

const client = new MongoClient(MONGO_URI)
const db = client.db("AH20232CP1")

export async function getChefs() {
   
    const collection = db.collection("chefs")

    const chefs = await collection.find().toArray()

    return chefs
}

export async function saveChef(chef) {
    await db.collection("chefs").insertOne(chef)
    return chef
}