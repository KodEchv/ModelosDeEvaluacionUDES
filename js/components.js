// Carga dinámica de componentes HTML

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
    loadComponent('components/modal-reeves.html', 'rubrica-reeves-modal');
});
