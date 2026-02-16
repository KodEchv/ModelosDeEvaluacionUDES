// Sistema de modales (abrir, cerrar, eventos)

const openModal = (modal) => {
    if (!modal) {
        return;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
};

const closeModal = (modal) => {
    if (!modal) {
        return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
};

// Event listeners para abrir modales
document.querySelectorAll("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal-open");
        const recursoId = trigger.getAttribute("data-recurso");
        
        openModal(document.getElementById(modalId));
        
        // Llenar formulario solo si es un recurso específico de RED
        if (recursoId === "red1-lori") {
            setTimeout(() => fillRED1LORI(), 300);
        } else if (recursoId === "red2-coda") {
            setTimeout(() => fillRED2CODA(), 300);
        }
    });
});

// Event listeners para cerrar modales
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-modal-close]")) {
            closeModal(modal);
        }
    });
});

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    const openModalElement = document.querySelector(".modal.is-open");
    closeModal(openModalElement);
});
