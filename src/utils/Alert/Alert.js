import Swal from 'sweetalert2';

/**
 * Muestra un mensaje de éxito genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showSuccessMessage = (title, text) => {
    Swal.fire({
        icon: 'success',
        title: title || '¡Éxito!',
        text: text || 'La operación se completó correctamente.',
        confirmButtonText: 'Aceptar',
    });
};
/**
 * Muestra un mensaje de error genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showErrorMessage = (title, text) => {
    Swal.fire({
        icon: 'error',
        title: title || '¡Error!',
        text: text || 'Ocurrió un problema al realizar la operación.',
        confirmButtonText: 'Aceptar',
    });
};

/**
 * Muestra un mensaje de advertencia genérico.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto adicional para detallar el mensaje.
 */
export const showWarningMessage = (title, text) => {
    Swal.fire({
        icon: 'warning',
        title: title || 'Advertencia',
        text: text || 'Por favor, revise la información antes de continuar.',
        confirmButtonText: 'Aceptar',
    });
};