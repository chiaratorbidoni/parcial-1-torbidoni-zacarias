import * as chefService from "../services/chefs.service.js"
import * as chefView from "../views/chef.view.js"

export async function getChefs(req, res) {

    try {

        const chefs = await chefService.getChefs()

        res.send(chefView.listaChefs(chefs))

    } catch (error) {

        console.log(error)
        res.status(500).send("Error al cargar los chefs")

    }

}

export function nuevoChef(req, res) {

    try {

        res.send(chefView.nuevoChef())

    } catch (error) {

        console.log(error)
        res.send(error)

    }

}

export async function saveChef(req, res) {

    try {

        const chef = req.body

        await chefService.saveChef(chef)

        res.redirect("/chefs")

    } catch (error) {

        console.log(error)
        res.send(error)

    }

}