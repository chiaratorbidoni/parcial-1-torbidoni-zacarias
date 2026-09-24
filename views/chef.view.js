import { createList, createPage } from "../page/chefs.mainviews.js"

export function listaChefs(chefs) {
    return createPage("Todos los Chefs", createList(chefs))
}

export function nuevoChef() {

    let html = `
        <div class="mb-4"><a href="/chefs" class="text-decoration-none text-danger fw-semibold"><i class="bi bi-arrow-left"></i> Volver a los Chefs</a></div>
        <div class="card border-0 shadow-sm rounded-4 bg-danger-subtle">
            <div class="card-body p-4 p-lg-5">
                <div class="mb-4">
                    <h1 class="fw-bold text-dark mb-2">Nuevo Chef</h1>
                    <p class="text-secondary mb-0">Completá los datos para agregar un nuevo Chef.</p>
                </div>
                <form action="/chefs/nuevo" method="post">
                    <div class="row g-4">
                        <div class="col-12">
                            <label for="name" class="form-label fw-semibold">Nombre</label>
                            <input type="text" class="form-control rounded-3" id="name" name="name" placeholder="Ej. Martitegui" required>
                        </div>
                        <div class="col-12">
                            <label for="country" class="form-label fw-semibold">País de origen</label>
                            <input type="text" class="form-control rounded-3" id="country" name="country" placeholder="Ej. Argentina" required>
                        </div>
                        <div class="col-12">
                            <label for="specialty" class="form-label fw-semibold">Plato de Especialidad</label>
                            <input type="text" class="form-control rounded-3" id="specialty" name="specialty" placeholder="Ej. Milanesa" required>
                        </div>
                        <div class="col-12">
                            <label for="age" class="form-label fw-semibold">Edad</label>
                            <input type="number" class="form-control rounded-3" id="age" name="age" placeholder="Ej. 35" required>
                        </div>
                        <div class="col-12">
                            <label for="stars" class="form-label fw-semibold">¿Tiene estrellas Michelín?</label>
                            <input type="text" class="form-control rounded-3" id="stars" name="stars" placeholder="Ej. Sí/No" required>
                        </div>
                        <div class="col-12">
                            <label for="image" class="form-label fw-semibold">Imagen del Chef</label>
                            <input type="text" class="form-control rounded-3" id="image" name="image" placeholder="https://...">
                        </div>
                        <div class="col-12">
                            <label for="book" class="form-label fw-semibold">Link a su libro</label>
                            <input type="url" class="form-control rounded-3" id="book" name="book" placeholder="https://...">
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row gap-2 justify-content-end mt-5">
                        <a href="/chefs" class="btn btn-outline-danger rounded-pill px-4">Cancelar</a>
                        <button type="submit" class="btn btn-danger rounded-pill px-4">
                            <i class="bi bi-plus-circle me-2"></i>Añadir Chef</button>
                    </div>
                </form>
            </div>
        </div>`
        
    return createPage("Nuevo Chef", html)
}