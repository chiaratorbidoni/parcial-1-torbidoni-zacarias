import { createList, createPage } from "../page/recetas.mainviews.js"

export function listaRecetas(recetas, filtros = {}, paginacion = {}) {
    return createPage("Todas las recetas", createList(recetas, filtros, paginacion))
}

export function recetaDetail(receta) {

    let etiquetas = ""
    receta.tags.forEach(tag => {
        etiquetas += `<span class="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-2">"${tag}"</span>`
    })
    let html = ""
    html += ` <div class="mb-4">
                <a href="/recetas" class="text-decoration-none text-danger fw-semibold">
                <i class="bi bi-arrow-left"></i> Volver a todas las recetas</a>
              </div>
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-danger-subtle">
                <div class="row g-0">
                    <div class="col-12 col-lg-6">
                        <div class="p-3 p-lg-4 h-100">
                            <div class="rounded-4 overflow-hidden h-100">
                                <img src="${receta.image}" alt="${receta.description}" class="w-100 h-100" style="min-height: 400px; max-height: 600px; object-fit: cover;">
                            </div>
                        </div>
                    </div>
                <div class="col-12 col-lg-6">
                    <div class="card-body p-4 p-lg-5 d-flex flex-column h-100">
                        <div class="d-flex flex-wrap gap-2 mb-3">
                            <span class="btn btn-danger rounded-4 px-3">${receta.country}</span>
                            <span class="btn btn-outline-danger rounded-4 px-3">${receta.category}</span>
                            <span class="btn btn-outline-danger rounded-4 px-3">${receta.type}</span>
                        </div>
                        <h1 class="display-5 fw-bold text-dark mb-3">${receta.name}</h1>
                        <p class="lead text-secondary mb-4">${receta.description}</p>
                        <div class="border-top border-bottom py-3 mb-4">
                            <div class="row g-3">
                                <div class="col-6">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi bi-clock text-danger fs-4"></i>
                                        <div>
                                            <small class="text-secondary d-block">Preparación</small>
                                            <strong>${receta.prepTime} min</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi bi-fire text-danger fs-4"></i>
                                        <div>
                                            <small class="text-secondary d-block">Cocción</small>
                                            <strong>${receta.cookTime} min</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi bi-bar-chart text-danger fs-4"></i>
                                        <div>
                                            <small class="text-secondary d-block">Dificultad</small>
                                            <strong>${receta.difficulty}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi bi-globe-asia-australia text-danger fs-4"></i>
                                        <div>
                                            <small class="text-secondary d-block">Origen</small>
                                            <strong>${receta.country}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6 class="fw-bold text-dark mb-2">Etiquetas</h6>
                            <div class="d-flex flex-wrap gap-2">${etiquetas}</div>
                        </div>
                        <div class="mt-auto">
                            <a href="${receta.recetaUrl}" target="_blank" rel="noopener noreferrer"
                                class="btn btn-danger btn-lg rounded-pill w-100">Ver receta</a>
                            <div class="d-flex gap-2 mt-2">
                                <a href="/recetas/editar/${receta._id}" class="btn btn-outline-danger rounded-pill w-50">Editar</a>
                                <a href="/recetas/eliminar/${receta._id}" class="btn btn-outline-danger rounded-pill w-50">Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    return createPage(receta.name, html)
}


export function nuevaReceta() {

    let html = `
        <div class="mb-4"><a href="/recetas" class="text-decoration-none text-danger fw-semibold"><i class="bi bi-arrow-left"></i> Volver a todas las recetas</a></div>
        <div class="card border-0 shadow-sm rounded-4 bg-danger-subtle">
            <div class="card-body p-4 p-lg-5">
                <div class="mb-4">
                    <h1 class="fw-bold text-dark mb-2">Nueva receta</h1>
                    <p class="text-secondary mb-0">Completá los datos para agregar una nueva receta.</p>
                </div>
                <form action="/recetas/nueva" method="post">
                    <div class="row g-4">
                        <div class="col-12">
                            <label for="name" class="form-label fw-semibold">Plato</label>
                            <input type="text" class="form-control rounded-3" id="name" name="name" placeholder="Ej. Ramen" required>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="country" class="form-label fw-semibold">País de origen</label>
                            <input type="text" class="form-control rounded-3" id="country" name="country" placeholder="Ej. Japón" required>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="category" class="form-label fw-semibold">Tipo de plato</label>
                            <select class="form-select rounded-3" id="category" name="category" required>
                                <option value="">Seleccionar...</option>
                                <option value="Plato principal">Plato Principal</option>
                                <option value="Guarnicion">Guarnición</option>
                                <option value="Sopa">Sopa</option>
                                <option value="Snack">Snack</option>
                                <option value="Arroz">Arroz</option>
                                <option value="Curry">Curry</option>
                                <option value="Breakfast">Desayuno</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="type" class="form-label fw-semibold">Tipo</label>
                            <select class="form-select rounded-3" id="type" name="type" required>
                                <option value="">Seleccionar...</option>
                                <option value="Vegetarian">Vegetariano</option>
                                <option value="Non-Vegetarian">No vegetariano</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="difficulty" class="form-label fw-semibold">Dificultad</label>
                            <select class="form-select rounded-3" id="difficulty" name="difficulty" required>
                                <option value="">Seleccionar...</option>
                                <option value="Easy">Fácil</option>
                                <option value="Medium">Media</option>
                                <option value="Hard">Difícil</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="prepTime" class="form-label fw-semibold">Tiempo de preparación</label>
                            <div class="input-group">
                                <input type="number" class="form-control rounded-start-3" id="prepTime" name="prepTime" min="0" placeholder="Ej. 15" required>
                                <span class="input-group-text rounded-end-3">min</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="cookTime" class="form-label fw-semibold">Tiempo de cocción</label>
                            <div class="input-group">
                                <input type="number" class="form-control rounded-start-3" id="cookTime" name="cookTime" min="0" placeholder="Ej. 30" required>
                                <span class="input-group-text rounded-end-3">min</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="image" class="form-label fw-semibold">Imagen del plato</label>
                            <input type="text" class="form-control rounded-3" id="image" name="image" placeholder="https://...">
                        </div>
                        <div class="col-12">
                            <label for="recetaUrl" class="form-label fw-semibold">Link a la receta</label>
                            <input type="url" class="form-control rounded-3" id="recetaUrl" name="recetaUrl" placeholder="https://...">
                        </div>
                        <div class="col-12">
                            <label for="description" class="form-label fw-semibold">Acerca de la receta</label>
                            <textarea class="form-control rounded-3" id="description" name="description" rows="4" placeholder="Escribí una breve descripción..." required></textarea>
                        </div>
                        <div class="col-12">
                            <label for="tags" class="form-label fw-semibold">Etiquetas</label>
                            <input type="text" class="form-control rounded-3" id="tags" name="tags" placeholder="Ej. Fried, Crispy, Japanese">
                            <div class="form-text">Separá las etiquetas con comas.</div>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row gap-2 justify-content-end mt-5">
                        <a href="/recetas" class="btn btn-outline-danger rounded-pill px-4">Cancelar</a>
                        <button type="submit" class="btn btn-danger rounded-pill px-4">
                            <i class="bi bi-plus-circle me-2"></i>Guardar receta</button>
                    </div>
                </form>
            </div>
        </div>`
        
    return createPage("Nueva receta", html)
}

export function editarReceta(receta) {

    let html = `
        <div class="mb-4">
            <a href="/recetas/${receta._id}" class="text-decoration-none text-danger fw-semibold">
                <i class="bi bi-arrow-left"></i> Volver a la receta
            </a>
        </div>

        <div class="card border-0 shadow-sm rounded-4 bg-danger-subtle">

            <div class="card-body p-4 p-lg-5">

                <div class="mb-4">
                    <h1 class="fw-bold text-dark mb-2">
                        Editar receta
                    </h1>

                    <p class="text-secondary mb-0">
                        Modificá los datos de la receta y guardá los cambios.
                    </p>
                </div>

                <form action="/recetas/editar/${receta._id}" method="post">

                    <div class="row g-4">

                        <!-- PLATO -->
                        <div class="col-12">
                            <label for="name" class="form-label fw-semibold">
                                Plato
                            </label>

                            <input
                                type="text"
                                class="form-control rounded-3"
                                id="name"
                                name="name"
                                value="${receta.name}"
                                required
                            >
                        </div>

                        <!-- PAÍS -->
                        <div class="col-12 col-md-6">
                            <label for="country" class="form-label fw-semibold">
                                País de origen
                            </label>

                            <input
                                type="text"
                                class="form-control rounded-3"
                                id="country"
                                name="country"
                                value="${receta.country}"
                                required
                            >
                        </div>

                        <!-- CATEGORÍA -->
                        <div class="col-12 col-md-6">
                            <label for="category" class="form-label fw-semibold">
                                Tipo de plato
                            </label>

                            <input
                                type="text"
                                class="form-control rounded-3"
                                id="category"
                                name="category"
                                value="${receta.category}"
                                required
                            >
                        </div>

                        <!-- TIPO -->
                        <div class="col-12 col-md-6">
                            <label for="type" class="form-label fw-semibold">
                                Tipo
                            </label>

                            <select
                                class="form-select rounded-3"
                                id="type"
                                name="type"
                                required
                            >
                                <option value="Vegetarian" ${receta.type === "Vegetarian" ? "selected" : ""}>
                                    Vegetariano
                                </option>

                                <option value="Non-Vegetarian" ${receta.type === "Non-Vegetarian" ? "selected" : ""}>
                                    No vegetariano
                                </option>
                            </select>
                        </div>

                        <!-- DIFICULTAD -->
                        <div class="col-12 col-md-6">
                            <label for="difficulty" class="form-label fw-semibold">
                                Dificultad
                            </label>

                            <select
                                class="form-select rounded-3"
                                id="difficulty"
                                name="difficulty"
                                required
                            >
                                <option value="Easy" ${receta.difficulty === "Easy" ? "selected" : ""}>
                                    Fácil
                                </option>

                                <option value="Medium" ${receta.difficulty === "Medium" ? "selected" : ""}>
                                    Media
                                </option>

                                <option value="Hard" ${receta.difficulty === "Hard" ? "selected" : ""}>
                                    Difícil
                                </option>
                            </select>
                        </div>

                        <!-- PREPARACIÓN -->
                        <div class="col-12 col-md-6">
                            <label for="prepTime" class="form-label fw-semibold">
                                Tiempo de preparación
                            </label>

                            <div class="input-group">
                                <input
                                    type="number"
                                    class="form-control rounded-start-3"
                                    id="prepTime"
                                    name="prepTime"
                                    value="${receta.prepTime}"
                                    min="0"
                                    required
                                >

                                <span class="input-group-text rounded-end-3">
                                    min
                                </span>
                            </div>
                        </div>

                        <!-- COCCIÓN -->
                        <div class="col-12 col-md-6">
                            <label for="cookTime" class="form-label fw-semibold">
                                Tiempo de cocción
                            </label>

                            <div class="input-group">
                                <input
                                    type="number"
                                    class="form-control rounded-start-3"
                                    id="cookTime"
                                    name="cookTime"
                                    value="${receta.cookTime}"
                                    min="0"
                                    required
                                >

                                <span class="input-group-text rounded-end-3">
                                    min
                                </span>
                            </div>
                        </div>

                        <!-- IMAGEN -->
                        <div class="col-12">
                            <label for="image" class="form-label fw-semibold">
                                Imagen del plato
                            </label>

                            <input
                                type="text"
                                class="form-control rounded-3"
                                id="image"
                                name="image"
                                value="${receta.image}"
                                required
                            >

                            <div class="form-text">
                                Ingresá la URL de la imagen.
                            </div>
                        </div>

                        <!-- LINK -->
                        <div class="col-12">
                            <label for="recetaUrl" class="form-label fw-semibold">
                                Link a la receta
                            </label>

                            <input
                                type="url"
                                class="form-control rounded-3"
                                id="recetaUrl"
                                name="recetaUrl"
                                value="${receta.recetaUrl}"
                            >
                        </div>

                        <!-- DESCRIPCIÓN -->
                        <div class="col-12">
                            <label for="description" class="form-label fw-semibold">
                                Acerca de la receta
                            </label>

                            <textarea
                                class="form-control rounded-3"
                                id="description"
                                name="description"
                                rows="4"
                                required
                            >${receta.description}</textarea>
                        </div>

                        <!-- ETIQUETAS -->
                        <div class="col-12">
                            <label for="tags" class="form-label fw-semibold">
                                Etiquetas
                            </label>

                            <input
                                type="text"
                                class="form-control rounded-3"
                                id="tags"
                                name="tags"
                                value="${Array.isArray(receta.tags) ? receta.tags.join(", ") : receta.tags}"
                            >

                            <div class="form-text">
                                Separá las etiquetas con comas.
                            </div>
                        </div>

                    </div>

                    <!-- BOTONES -->
                    <div class="d-flex flex-column flex-sm-row gap-2 justify-content-end mt-5">

                        <a
                            href="/recetas/${receta._id}"
                            class="btn btn-outline-danger rounded-pill px-4"
                        >
                            Cancelar
                        </a>

                        <button
                            type="submit"
                            class="btn btn-danger rounded-pill px-4"
                        >
                            <i class="bi bi-check-circle me-2"></i>
                            Guardar cambios
                        </button>

                    </div>

                </form>

            </div>

        </div>
    `

    return createPage("Editar receta", html)
}

export function eliminarReceta(receta) {

    let html = `
        <div class="mb-4">
            <a href="/recetas/${receta._id}" class="text-decoration-none text-danger fw-semibold">
                <i class="bi bi-arrow-left"></i> Volver a la receta
            </a>
        </div>

        <div class="card border-0 shadow-sm rounded-4 bg-danger-subtle">

            <div class="card-body p-4 p-lg-5">

                <div class="text-center mb-4">

                    <i class="bi bi-exclamation-triangle text-danger display-4"></i>

                    <h1 class="fw-bold text-dark mt-3 mb-2">
                        Eliminar receta
                    </h1>

                    <p class="text-secondary mb-0">
                        ¿Estás seguro de que querés eliminar esta receta?
                    </p>

                </div>

                <div class="card border-0 bg-white rounded-4 overflow-hidden mb-4">

                    <div class="row g-0 align-items-center">

                        <div class="col-12 col-md-4">
                            <div class="p-3">
                                <div class="rounded-4 overflow-hidden">
                                    <img
                                        src="${receta.image}"
                                        alt="${receta.name}"
                                        class="w-100"
                                        style="height: 220px; object-fit: cover;"
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-8">

                            <div class="card-body p-4">

                                <div class="d-flex flex-wrap gap-2 mb-2">

                                    <span class="badge bg-danger rounded-pill px-3 py-2">
                                        ${receta.country}
                                    </span>

                                    <span class="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">
                                        ${receta.category}
                                    </span>

                                </div>

                                <h2 class="fw-bold text-dark mb-2">
                                    ${receta.name}
                                </h2>

                                <p class="text-secondary mb-0">
                                    ${receta.description}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <form action="/recetas/eliminar/${receta._id}" method="post">

                    <div class="d-flex flex-column flex-sm-row gap-2 justify-content-center">

                        <a
                            href="/recetas/${receta._id}"
                            class="btn btn-outline-danger rounded-pill px-4"
                        >
                            Cancelar
                        </a>

                        <button
                            type="submit"
                            class="btn btn-danger rounded-pill px-4"
                        >
                            <i class="bi bi-trash me-2"></i>
                            Eliminar receta
                        </button>

                    </div>

                </form>

            </div>

        </div>
    `

    return createPage("Eliminar receta", html)
}