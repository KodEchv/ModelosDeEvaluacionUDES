// Utilidades generales

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
