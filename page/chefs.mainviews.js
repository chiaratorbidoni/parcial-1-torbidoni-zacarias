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


export function createList(lista) {

   let html = `
    <div class="mb-4">
        <h1 class="display-5 fw-bold text-dark">Nuestros Chefs</h1>
        <p class="text-secondary lead">Los mejores Chefs del mundo, listos para servirte.</p>
    </div>
    <a class="btn btn-outline-danger rounded-pill text-danger bg-white px-4 mb-4 me-2" href="/recetas">Ver todas las recetas</a>
    <a class="btn btn-danger rounded-pill px-4 mb-4" href="/chefs/nuevo">Agregar Chef al directorio</a>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    `

    lista.forEach(chef => {

        html += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden bg-danger-subtle">

                    <!-- IMAGEN -->
                    <img
                        src="${chef.image}"
                        class="card-img-bottom"
                        alt="${chef.name}"
                        style="height: 30vh; object-fit: cover; object-position: center 10%"
                    >

                    <div class="card-body d-flex flex-column">
                        <!-- NOMBRE -->
                        <h5 class="card-title fw-bold text-dark mb-2">
                            ${chef.name}
                        </h5>

                        <!-- DESCRIPCIÓN -->
                        <p class="card-text text-muted small mb-2 flex-grow-1 fs-6">
                            <b>Plato de especialidad:</b> ${chef.specialty}
                        </p>
                        <p class="card-text text-muted small mb-2 flex-grow-1 fs-6">
                            <b>Edad:</b> ${chef.age}
                        </p>
                        <p class="card-text text-muted small mb-2 flex-grow-1 fs-6">
                            <b>Tiene estrellas Michelín:</b> ${chef.stars}
                        </p>

                        <!-- BOTONES -->
                        <div class="mt-auto d-grid gap-2">
                            <a href="${chef.book}" target="_blank" class="btn btn-danger mb-2">Comprar el libro</a>
                        </div>

                    </div>
                </div>
            </div>
        `
    })

return html

}

export default { createPage, createList }