document.querySelectorAll("[data-tabs]").forEach((group) => {
    const buttons = Array.from(group.querySelectorAll(":scope > .tab-buttons .tab-button"));
    const panels = Array.from(group.querySelectorAll(":scope > .tab-panels > .tab-panel"));
    const select = group.querySelector(":scope > .tab-select-wrap .tab-select");

    if (!panels.length || (!buttons.length && !select)) {
        return;
    }

    const activate = (name) => {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.tab === name;
            btn.classList.toggle("is-active", isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
            const isActive = panel.dataset.tabPanel === name;
            panel.classList.toggle("is-active", isActive);
        });

        if (select && select.value !== name) {
            select.value = name;
        }
    };

    let initial = buttons.find((btn) => btn.classList.contains("is-active"));
    if (!initial && buttons.length) {
        initial = buttons[0];
    }

    if (initial) {
        activate(initial.dataset.tab);
    } else if (select) {
        activate(select.value);
    } else if (panels.length) {
        activate(panels[0].dataset.tabPanel);
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => activate(btn.dataset.tab));
    });

    if (select) {
        select.addEventListener("change", (event) => {
            const target = event.target;
            activate(target.value);
        });
    }
});

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

document.querySelectorAll("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const modalId = trigger.getAttribute("data-modal-open");
        openModal(document.getElementById(modalId));
    });
});

document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-modal-close]")) {
            closeModal(modal);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    const openModalElement = document.querySelector(".modal.is-open");
    closeModal(openModalElement);
});

// Cargar componentes dinámicamente
async function loadComponent(componentPath, containerId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Error al cargar ${componentPath}: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
        }
    } catch (error) {
        console.error('Error cargando componente:', error);
    }
}

// Cargar modales al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/modal-lori.html', 'rubrica-lori-modal');
    loadComponent('components/modal-coda.html', 'rubrica-coda-modal');
});

// Función para imprimir rúbricas
function printRubric(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Remover clase printing de todos los modales
    document.querySelectorAll('.modal').forEach(m => {
        m.classList.remove('printing');
    });

    // Agregar clase printing solo al modal que se va a imprimir
    modal.classList.add('printing');

    // Ejecutar impresión con más tiempo para renderizar
    setTimeout(() => {
        window.print();
        
        // Restaurar estado después de imprimir
        setTimeout(() => {
            modal.classList.remove('printing');
        }, 100);
    }, 500);
}
