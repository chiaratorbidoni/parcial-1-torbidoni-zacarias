import { urlFiltro } from "../services/recetas.service.js"

export function createPage(title, content) {

    let html = ""
    html += `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    </head>`
    html += `<body class="bg-light">
                <nav class="navbar navbar-recetas mb-4 bg-danger-subtle">
                    <div class="container justify-content-center col-3 col-md-2 col-lg-2 col-xl-1">
                        <a href="/">
                        <img src="/img/recetas-de-asia-logo.png" class="img-fluid" alt="Logo">
                        </a>
                    </div>
                </nav>
                <main class="container pb-5">${content}</main>
            </body>
            </html>`

    return html
}


export function createList(lista, filtros = {}, paginacion = {}) {

   let html = `
    <div class="mb-4">
        <h1 class="display-5 fw-bold text-dark">Todas las recetas</h1>
        <p class="text-secondary lead">Descubrí recetas tradicionales de diferentes países asiáticos.</p>
    </div>
    
    <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
    <div class="d-flex flex-wrap gap-2">
    <a class="btn btn-outline-danger rounded-pill text-danger bg-white px-4" href="/chefs">Ver Chefs</a>
    <a class="btn btn-outline-danger rounded-pill text-danger bg-white px-4" href="/recetas">Ver todas</a>
    <select class="form-select w-auto rounded-pill border-danger text-center text-danger" id="country" name="country" onchange="location.href=this.value">
        <option disabled selected>País...</option>
        <option value="/recetas">Todos</option>
        <option value="${urlFiltro(filtros, "country", "India")}">India</option>
        <option value="${urlFiltro(filtros, "country", "Japon")}">Japón</option>
        <option value="${urlFiltro(filtros, "country", "Tailandia")}">Tailandia</option>
        <option value="${urlFiltro(filtros, "country", "China")}">China</option>
        <option value="${urlFiltro(filtros, "country", "Vietnam")}">Vietnam</option>
        <option value="${urlFiltro(filtros, "country", "Corea del Sur")}">Corea del Sur</option>
    </select>
    <select class="form-select w-auto rounded-pill border-danger text-center text-danger" id="type" name="type" onchange="location.href=this.value">
        <option disabled selected>Tipo...</option>
        <option value="${urlFiltro(filtros, "type", "Vegetariano")}">Vegetariano</option>
        <option value="${urlFiltro(filtros, "type", "No Vegetariano")}">No Vegetariano</option>
    </select>
    <select class="form-select w-auto rounded-pill border-danger text-center text-danger" id="difficulty" name="difficulty" onchange="location.href=this.value">
        <option disabled selected>Dificultad...</option>
        <option value="${urlFiltro(filtros, "difficulty", "Facil")}">Fácil</option>
        <option value="${urlFiltro(filtros, "difficulty", "Media")}">Media</option>
        <option value="${urlFiltro(filtros, "difficulty", "Dificil")}">Difícil</option>
    </select>
        <a class="btn btn-danger rounded-pill px-3" href="/recetas/nueva">Crear +</a>
    </div>
    <form action="/recetas" method="GET" class="d-flex col-12 col-lg-3">
        <input 
            type="search" 
            name="plato" 
            class="form-control rounded-start-pill"
            placeholder="Buscar plato..."
        >
        <button class="btn btn-danger rounded-end-pill px-3" type="submit">
            <i class="bi bi-search"></i>
        </button>
    </form>

</div>

    <!-- CARDS -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    `

    lista.forEach(item => {

        html += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-danger-subtle">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex gap-2 mb-2">
                            <span class="btn btn-danger rounded-4 text-wrap fs-6">
                                ${item.country}
                            </span>
                            <span class="btn btn-outline-danger rounded-4 text-wrap fs-6">
                                ${item.category}
                            </span>
                        </div>
                        <h5 class="card-title fw-bold text-dark mb-2">
                            ${item.name}
                        </h5>
                        <p class="card-text text-muted small mb-3 flex-grow-1">
                            ${item.description}
                        </p>
                        <div class="d-flex flex-column gap-1 small mb-3 border-top border-bottom py-2">
                            <div class="d-flex justify-content-between">
                                <span class="fw-semibold text-secondary">Tipo:</span>
                                <span>${item.type}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="fw-semibold text-secondary">Dificultad:</span>
                                <span>${item.difficulty}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="fw-semibold text-secondary">Prep / Cocción:</span>
                                <span>${item.prepTime}m / ${item.cookTime}m</span>
                            </div>
                        </div>
                        <div class="mt-auto d-grid gap-2">
                            <a href="${item.recetaUrl}" target="_blank" class="btn btn-danger">Ver receta</a>
                            <a href="/recetas/${item._id}" target="_blank" class="btn btn-outline-danger btn-sm"
                            >Detalles del plato</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    html += `
        </div>

        <div class="d-flex justify-content-center gap-2 mt-5">
            ${paginacion.page > 1 ? `
                <a href="${urlFiltro(filtros, "page", paginacion.page - 1)}"
                class="btn btn-outline-danger rounded-pill">
                    ← Anterior
                </a>
            ` : ""}
            <span class="btn btn-danger rounded-pill">
                Página ${paginacion.page} de ${paginacion.totalPages}
            </span>
            ${paginacion.page < paginacion.totalPages ? `
                <a href="${urlFiltro(filtros, "page", paginacion.page + 1)}"
                class="btn btn-outline-danger rounded-pill">
                    Siguiente →
                </a>
            ` : ""}
        </div>`

return html

}

export default { createPage, createList }