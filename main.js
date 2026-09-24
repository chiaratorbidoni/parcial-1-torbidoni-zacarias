import express from "express"
import recetasRoute from "./routes/recetas.routes.js"
import recetasApiRoute from "./api/routes/recetas.api.routes.js"
import chefRoute from "./routes/chefs.routes.js"
import chefApiRoute from "./api/routes/chefs.api.routes.js"

const app = express()

app.use( "/", express.static("public") )
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )

app.use( recetasRoute )
app.use( recetasApiRoute )
app.use( chefRoute )
app.use( chefApiRoute )

app.listen(3333, () => console.log("Funcionando... http://localhost:3333"))