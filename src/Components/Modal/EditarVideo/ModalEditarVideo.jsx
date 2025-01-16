import React, { useState } from "react";
import style from "./ModalEditarVideo.module.css";
import InputForm from "../../Formulario/InputForm/InputForm";
import SelectForm from "../../Formulario/SelectForm/SelectForm";
import TextareaForm from "../../Formulario/TextareaForm/TextareaForm";
import { editar } from "../../../api/api";
import { showSuccessMessage, showErrorMessage, showWarningMessage } from "../../../utils/Alert/Alert";

export default function ModalEditarVideo({ isVisible, onClose, dataToEdit }) {
    if (!isVisible) return null;
    const { id, titulo, categoria, imagen, video, descripcion } = dataToEdit;

    const initialFormData = {
        titulo: titulo || "",
        categoria: categoria || "",
        imagen: imagen || "",
        video: video || "",
        descripcion: descripcion || "",
    };

    const initialErrors = {
        titulo: { error: false, message: "El título es obligatorio" },
        categoria: { error: false, message: "Seleccione una categoría" },
        imagen: { error: false, message: "El enlace de la imagen es obligatorio" },
        video: { error: false, message: "El enlace del video es obligatorio" },
        descripcion: { error: false, message: "La descripción del video es obligatoria" },
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (value.trim() !== "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: { ...prevErrors[name], error: false },
            }));
        }
    };

    // Validar campos vacíos
    const validateForm = () => {
        const errors = {};
        
        // Recorremos los datos del formulario
        for (let key in formData) {
            // Verificamos que el valor sea una cadena antes de aplicar trim
            if (typeof formData[key] === 'string' && formData[key].trim() === '') {
                errors[key] = `${key} no puede estar vacío`;
            } else if (formData[key] === null || formData[key] === undefined) {
                errors[key] = `${key} es obligatorio`;
            }
        }
        
        return Object.keys(errors).length === 0;
    };
    
    const handleSave = async (e) => {
        e.preventDefault();
    
        try {
            if (validateForm()) {
                const response = await editar("/videos", id, formData); 
                if (response.success) {
                    showSuccessMessage("¡Éxito!", response.mensaje);
                } else {
                    showErrorMessage("¡Error!", response.mensaje);
                }
            } else {
                showWarningMessage("¡Advertencia!", "Por favor, revise los campos del formulario.");
            }
        } catch (error) {
            console.error("Error inesperado en handleSave:", error);
            showErrorMessage("¡Error inesperado!", "Ocurrió un problema al procesar la solicitud.");
        }finally{
            onClose();
        }
    };

    // Manejar el evento de "Limpiar"
    const handleClear = () => {
        setFormData(initialFormData);
        setErrors(initialErrors);
    };
    return (
        <div
            className={style.modalBackdrop}
            onClick={onClose}
        >
            <div
                className={style.modalContent}
                onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre cuando se hace clic dentro de él
            >
                <h3 className={style.title}>Editar card:</h3>
                <form onSubmit={handleSave}>
                    <InputForm
                        name="titulo"
                        labelChild="Nombre de Usuario"
                        type="text"
                        placeholder="Introduce tu nombre"
                        estado={errors.titulo.error} // Usar el error de estado
                        mensajeError={errors.titulo.message}
                        modoEdicion={true}
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                    <SelectForm
                        name="categoria"
                        labelChild="Categoría"
                        estado={errors.categoria.error}
                        mensajeError={errors.categoria.message}
                        modoEdicion={true}
                        value={formData.categoria}
                        onChange={handleChange}
                    />
                    <InputForm
                        labelChild="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        type="text"
                        name="imagen"
                        estado={errors.imagen.error}
                        mensajeError={errors.imagen.message}
                        modoEdicion={true}
                        value={formData.imagen}
                        onChange={handleChange}
                    />
                    <InputForm
                        labelChild="Video"
                        placeholder="Ingrese el enlace del video"
                        type="text"
                        name="video"
                        estado={errors.video.error}
                        mensajeError={errors.video.message}
                        modoEdicion={true}
                        value={formData.video}
                        onChange={handleChange}
                    />
                    <TextareaForm
                        name="descripcion"
                        labelChild="Descripción"
                        placeholder="¿De qué se trata este vídeo?"
                        estado={errors.descripcion.error}
                        mensajeError={errors.descripcion.message}
                        modoEdicion={true}
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                    <div>
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={handleClear}>
                            Limpiar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
